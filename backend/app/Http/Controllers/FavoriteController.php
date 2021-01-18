<?php

namespace App\Http\Controllers;

use App\Constants\FavoriteCategory;
use App\Constants\OwnerType;
use App\Http\Resources\Favorite as FavoriteResource;
use App\Http\Resources\FavoritePaginatorCollection;
use App\Models\Favorite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class FavoriteController extends Controller
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
     * @return \Illuminate\Http\JsonResponse json
     */
    public function index(Request $request)
    {
        $currentUser = Auth::user();
        $favoritesReq = Favorite::with('car', 'car.uploads');
        $favoritesReq->where('user_id', $currentUser->id);

        $favoritesLengthAwarePaginator = $favoritesReq->paginate($request->perPage, ['*'], $request->pageName, $request->page);

        return response()->json(new FavoritePaginatorCollection($favoritesLengthAwarePaginator));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $reqFavorite = (object)$request->json()->all();
        $currentUser = Auth::user();

        // Validate
        $validator = $this->validateEntity($reqFavorite, null);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->messages()], 401);
        }
        //
        // Create entity
        $newFavorite = new Favorite;
        $this->updateFavoriteFields($newFavorite, $reqFavorite);

        $newFavorite->user_id = $currentUser->id;
        $newFavorite->save();

        return $this->renderJson($newFavorite->id);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Favorite
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return $this->renderJson($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $favorite
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Favorite $favorite)
    {
        $reqFavorite = (object)$request->json()->all();

        // check that id are the same
        if (!isset($reqFavorite->id) || $reqFavorite->id != $favorite->id) {
            return response()->json(['error' => 'NotFound'], 404);
        }

        $currentUser = Auth::user();
        if (!$currentUser->canEditFavorite($favorite)) {
            return response()->json(['error' => 'Unauthorised'], 403);
        }

        // Validation
        $validator = $this->validateEntity($reqFavorite, $favorite);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        // Update allowed fields
        $this->updateFavoriteFields($favorite, $reqFavorite);

        $favorite->save();
        //
        return $this->renderJson($favorite->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $favorite = Favorite::find($id);
        if ($favorite == NULL) {
            return response()->json(['error' => 'NotFound'], 404);
        }

        $currentUser = Auth::user();
        if ($currentUser->id != $favorite->user_id || !$currentUser->isAdminUser()) {
            return response()->json(['error' => 'Unauthorised'], 403);
        }

        $favorite->delete();
    }


    private function validateEntity($reqFavorite, $favorite)
    {
        return Validator::make((array)$reqFavorite, [
            'category' => ['required', 'max:' . Favorite::fieldsSizeMax('category'), Rule::in(FavoriteCategory::list()) ],
            'entity_id' => ['required', 'integer'],
        ],
            $messages = [
                'required' => 'The :attribute field is required.',
                'in' => 'The :attribute must be one of the following types: :values',
            ]
        );
    }

    private function updateFavoriteFields($favorite, $reqFavorite)
    {
        collect($favorite->getFillable())->each(function ($item, $key) use ($favorite, $reqFavorite) {
            $favorite->{$item} = isset($reqFavorite->{$item}) ? $reqFavorite->{$item} : $favorite->{$item};
        });

    }

    private function renderJson($id): \Illuminate\Http\JsonResponse
    {
        $favorite = Favorite::with('car', 'car.uploads')->find($id);
        if ($favorite == NULL) {
            return response()->json(['error' => 'NotFound'], 404);
        }
        return response()->json(new FavoriteResource($favorite));
    }
}
