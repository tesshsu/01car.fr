<?php

namespace App\Http\Controllers;

use App\Http\Resources\User as UserResource;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class ProfilController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $company
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $currentUser = Auth::user();
        // check that id are the same
        if ($currentUser->id != $id) {
            return response()->json(['error'=>'Unauthorised'], 403);
        }

        return $this->renderJson($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, User $user)
    {
        $currentUser = Auth::user();
        if ($currentUser->id != $user->id) {
            return response()->json(['error'=>'Unauthorised'], 403);
        }

        $reqUser = (object)$request->json()->all();

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

    private function renderJson($id)
    {
        $user = User::find($id);
        return response()->json( new UserResource($user));
    }
}
