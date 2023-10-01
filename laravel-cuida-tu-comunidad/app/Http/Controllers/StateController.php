<?php

namespace App\Http\Controllers;

use App\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $states = State::all();
      return response()->json($states);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $state = new State;
        $state->name = $request->name;
        $state->initials = $request->initials;

        $state->save();
        $data = [
          'message' => 'State created successfully',
          'state' => $state
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(State $state)
    {
        return response()->json($state);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(State $state)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, State $state)
    {
        $state->name = $request->name;
        $state->initials = $request->initials;

        $state->save();
        $data = [
          'message' => 'State updated successfully',
          'state' => $state
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(State $state)
    {
        $state->delete();
        $data = [
          'message' => 'State deleted successfully',
          'state' => $state
        ];
        return response()->json($data);
    }
}
