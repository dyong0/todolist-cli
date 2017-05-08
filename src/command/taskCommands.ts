import Command from "./Command";
import { TaskService, taskService } from "../task/TaskService";
import * as child_process from "child_process";
import { editorPath, newTaskFilePath } from "../settings";
import AsyncCommand from "./AsyncCommand";

export class ListCommand extends Command {
    protected getRunnableName(): string {
        return "getTaskListFormatted";
    }

    execute(executor: TaskService): string {
        super.execute(executor);
        return "";
    }
}
export class AddCommand extends Command {
    protected getRunnableName(): string {
        return "addTask";
    }

    execute(executor: TaskService): string {
        super.execute(executor);
        return "";
    }
}
export class DeleteCommand extends Command {
    protected getRunnableName(): string {
        if (this.args.length > 1) {
            return "deleteTasks";
        }

        return "deleteTask";
    }

    execute(executor: TaskService): string {
        super.execute(executor);
        return "";
    }
}
export class CompleteCommand extends Command {
    protected getRunnableName(): string {
        if (this.args.length > 1) {
            return "completeTasks";
        }

        return "completeTask";
    }

    execute(executor: TaskService): string {
        super.execute(executor);
        return "";
    }
}
export class OpenNewTaskWithEditorCommand extends AsyncCommand<string[]> {
    protected getRunnableName(): string {
        return "openNewTaskWithEditor";
    }

    openNewTaskWithEditor(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            child_process.spawnSync(editorPath, [newTaskFilePath]);
            resolve();
        });
    }

    execute(executor: OpenNewTaskWithEditorCommand): Promise<string[]> {
        return super.execute(executor);
    }
}