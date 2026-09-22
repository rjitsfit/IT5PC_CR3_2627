from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock database dictionary
tasks = {
    1: {"id": 1, "title": "Buy groceries", "completed": False},
    2: {"id": 2, "title": "Finish Flask project", "completed": True}
}

# 1. READ ALL (GET) & CREATE (POST)
@app.route('/tasks', methods=['GET', 'POST'])
def manage_tasks():
    if request.method == 'POST':
        # Parse incoming JSON payload
        data = request.get_json() or {}
        title = data.get('title')
        
        if not title:
            return jsonify({"error": "Missing 'title' field in JSON body"}), 400
            
        # FIX: Check if 'completed' is provided in JSON, otherwise default to False
        # We use data.get('completed', False) and ensure it's converted to a boolean
        is_completed = bool(data.get('completed', False))
            
        new_id = max(tasks.keys(), default=0) + 1
        tasks[new_id] = {
            "id": new_id, 
            "title": title, 
            "completed": is_completed  # It now respects your payload input!
        }
        
        return jsonify(tasks[new_id]), 201

    # GET request: Return all tasks as a list
    return jsonify(list(tasks.values())), 200


# 2. READ ONE (GET)
@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = tasks.get(task_id)
    if not task:
        return jsonify({"error": f"Task with ID {task_id} not found"}), 404
        
    return jsonify(task), 200


# 3. UPDATE STATUS (PUT)
@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    if task_id not in tasks:
        return jsonify({"error": f"Task with ID {task_id} not found"}), 404
        
    # Toggle the completed status
    tasks[task_id]['completed'] = not tasks[task_id]['completed']
    
    return jsonify({
        "message": "Task updated successfully",
        "task": tasks[task_id]
    }), 200


# 4. DELETE (DELETE)
@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    if task_id not in tasks:
        return jsonify({"error": f"Task with ID {task_id} not found"}), 404
        
    deleted_task = tasks.pop(task_id)
    
    return jsonify({
        "message": "Task deleted successfully",
        "deleted_id": task_id
    }), 200


if __name__ == '__main__':
    app.run(debug=True)
