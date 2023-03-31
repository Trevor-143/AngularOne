import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    template: `<h1> Navbar Component </h1>
                <p>This is a navbar paragraph.</p>
    `,
    styles: [`h1{
        color: brown;
        margin: 5px;
        border: 2px solid red;
        padding: 5px 10px;
        border-radius: 10px;
        width: fit-content;
    }`]
})

export class NavbarComponent {

}