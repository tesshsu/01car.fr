<?php

namespace App\Http\Controllers;

use App\Http\Resources\User as UserResource;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;


class ProfilController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $company
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $currentUser = Auth::user();
        return $this->renderJson($currentUser->id );
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        $currentUser = Auth::user();
        $reqUser = (object)$request->json()->all();
        if ($currentUser->id != $reqUser->id) {
            return response()->json(['error'=>'Unauthorised'], 403);
        }

        $user = User::find($currentUser->id);

        // check that id are the same
        if ($reqUser->id != $user->id) {
            throw new ModelNotFoundException;
        }

        // Validation
        $validator = $this->validateEntity($reqUser, $user);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        // Update allowed fields
        $this->updateUserFields($user, $reqUser);

        $user->save();
        //
        return $this->renderJson($user->id);
    }

    private function validateEntity($reqUser, $user)
    {
        $validator = Validator::make((array)$reqUser, [
            'name' => 'max:' . User::fieldsSizeMax('name'),
            'email' => [Rule::requiredIf($user == null || $user->email == null || empty($user->email)),
                $user != null ? Rule::unique('users')->ignore($user->id) : Rule::unique('users'),
                'max:' . User::fieldsSizeMax('email'),
                'email'
            ],
            'password' => 'max:' . User::fieldsSizeMax('password'),
            'phone' => 'max:' . User::fieldsSizeMax('phone'),
        ]);

        return $validator;
    }


    private function updateUserFields($user, $reqUser)
    {
        $user->name = isset($reqUser->name) ? $reqUser->name : $user->name;
        $user->email = isset($reqUser->email) ? $reqUser->email : $user->email;
        $user->password = isset($reqUser->password) ? bcrypt($reqUser->password) : $user->password;
        $user->phone = isset($reqUser->phone) ? $reqUser->phone : $user->phone;
    }

    private function renderJson($id)
    {
        $user = User::find($id);
        return response()->json( new UserResource($user));
    }
}
