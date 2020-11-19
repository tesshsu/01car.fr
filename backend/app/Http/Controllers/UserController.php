<?php

namespace App\Http\Controllers;

use App\Constants\Permission;
use App\Http\Resources\User as UserResource;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public $successStatus = 200;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }


    /**
     * List all users
     *
     * @return \Illuminate\Http\Response json
     */
    public function index()
    {
        $users = User::all();
        return response()->json( $users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $reqUser = (object)$request->json()->all();

        // Validate
        $validator = $this->validateEntity($reqUser, null);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->messages()], 401);
        }
        //
        // Create entity
        $newUser = new User;
        $this->updateUserFields($newUser, $reqUser);
        $newUser->password = isset($reqUser->password) ? bcrypt($reqUser->password) : bcrypt('password');

        $newUser->save();
        return $this->renderJson($newUser->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $company
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->renderJson($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $currentUser = Auth::user();
        if ( $currentUser->id == $user->id)  {
            return response()->json(['error' => 'Unauthorised'], 403);
        }
        $user->delete();
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
        if ($user == NULL) {
            return response()->json(['error' => 'NotFound'], 404);
        }
        return response()->json( new UserResource($user));
    }
}
