<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::all();
        return response()->json($tasks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = array(
          'title' => 'required',
          'description' => 'required',
          'author' => 'required',
          'state_id' => 'required|exists:states,id'
        );    
        $messages = array(
          'title.required' => "Task's Title required",
          'description.required' => "Task's Description required",
          'author.required' => "Task's Author required",
          'state_id.required' => "Task's State_id required",
          'state_id.exists' => 'Not an existing ID',
        );
        $validator = Validator::make( $request->all(), $rules, $messages );

        if ($validator->fails()) 
        {
          return [
              'success' => false, 
              'message' => $validator->errors()
          ];
        }

        $task = new Task;
        $task->title = $request->title;
        $task->description = $request->description;
        $task->author = $request->author;
        $task->state_id = $request->state_id;

        $task->save();
        $data = [
          'message' => 'Task created successfully',
          'task' => $task
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Task $task)
    {
      return response()->json($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $task->likes = $task->likes + 1;

        $task->save();
        $data = [
          'message' => 'Task updated successfully',
          'task' => $task
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        $data = [
          'message' => 'Task deleted successfully',
          'task' => $task
        ];
        return response()->json($data);
    }
}
