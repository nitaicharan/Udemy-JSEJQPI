import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.changeMenu();
        this.changeImage();
    }

    changeMenu(){
        $(document).ready(() => {
            $('#yellow').click(()=>{
                $('#titulo').css('color','yellow');
            });
            $('#orange').click(()=>{
                $('#titulo').css('color','orange');
            });
            $('#red').click(()=>{
                $('#titulo').css('color','red');
            });
            $('#pink').click(()=>{
                $('#titulo').css('color','pink');
            });
            $('#green').click(()=>{
                $('#titulo').css('color','green');
            });
        });
    }

    changeImage(){
        $(document).ready(() => {
            $('#1').click(()=>{
                $('#corpo').css('background-image','url(https://upload.wikimedia.org/wikipedia/commons/d/da/The_City_London.jpg)');
            });
            $('#2').click(()=>{
                $('#corpo').css('background-image','url(https://cdn.pixabay.com/photo/2019/10/26/08/00/spain-4578905_960_720.jpg)');
            });
            $('#3').click(()=>{
                $('#corpo').css('background-image','url(https://upload.wikimedia.org/wikipedia/commons/c/ce/S%C3%A3o_Paulo_city_%28Bela_Vista%29.jpg)');
            });
            $('#4').click(()=>{
                $('#corpo').css('background-image','url(https://upload.wikimedia.org/wikipedia/commons/d/dc/Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg)');
            });
            $('#5').click(()=>{
                $('#corpo').css('background-image','url(https://storage.needpix.com/rsynced_images/city-932511_1280.jpg)');
            });
        });
    }
}
