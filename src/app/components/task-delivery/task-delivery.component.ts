import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';
import { Assignment } from 'src/app/services/assignment.model';

@Component({
  selector: 'app-task-delivery',
  templateUrl: './task-delivery.component.html',
  styleUrls: ['./task-delivery.component.css'],
})
export class TaskDeliveryComponent implements OnInit {
  myControl = new FormControl();
  selectedClass: number;
  options: string[] = [];
  names: string[][] = [
    ['ערן קרקובסקי', 'עומר קרקובסקי', 'לירן גזית'],
    ['לאה שמיר', 'יובל גזית', 'ליאור גזית'],
  ];
  filteredOptions: Observable<string[]>;
  assignments: Assignment[];
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.assignments = this.taskService.getAssigments();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  changeClass() {
    this.options = this.names[this.selectedClass];
  }

  onSubmit(form: NgForm) {}
}
