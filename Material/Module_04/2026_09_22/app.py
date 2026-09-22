from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


tasks = {
    1: {"id": 1, "title": "Buy groceries", "completed": False},
    2: {"id": 2, "title": "Finish Flask project", "completed": True}
}


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get data from the HTML text input
        title = request.form.get('title')
        if title:
            new_id = max(tasks.keys(), default=0) + 1
            tasks[new_id] = {"id": new_id, "title": title, "completed": False}
        return redirect(url_for('index'))
    
    # GET request: Render the dashboard with tasks
    return render_template('index.html', tasks=tasks.values())


@app.route('/task/<int:task_id>/update', methods=['POST'])
def update_task(task_id):
    if task_id in tasks:
        # Toggle the completed status
        tasks[task_id]['completed'] = not tasks[task_id]['completed']
    return redirect(url_for('index'))



@app.route('/task/<int:task_id>/delete', methods=['POST'])
def delete_task(task_id):
    if task_id in tasks:
        tasks.pop(task_id)
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
