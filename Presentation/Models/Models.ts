﻿module UltimateToDoApp {
    'use strict';

    export class TaskItemModel {
        Id: string;
        Name: string;
        Category: number;
        Created: Date;
        BoardId: string;
        Index: number;
    }
    
    export class BoardModel {
        Id: number;
        Name: string;
    }
} 