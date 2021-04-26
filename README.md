## Web Components ### Not repit yourself

## Custom element

Generar own labels, re rules is that our new labels are:

app-label or my-label or example-app

## Shadow DOM
Generate a encansuled perfect of code, so the style no rewrite and scope is different, for example You can used <video> </video> and into this label exist a code that we wasn't work. 

## HTML Templates

Is a HTML label but this laben no es posible used in HTML if we used this label in HTML it no rendered, only is posible if we have  a match with **Javascript**.

This label create a **Fracment** so this improve performance because render the frangemnt and later with JS set container.

## ES Modules

Import HTML content in othe, replace to HTML Imports.

## life cicle webComponents

1. Constructor: save in memory all variables or class that we need
2. ConnectedCallback: After that our element is part of DOM (is part of HTML node)
3. AttributeChangeCallback: When attributes our components Changes 
4. DisconnectedCallback: When our component destroy or remove of DOM
5. AdoptedCallback: (is strange) this is when we used component into IFrame (Bad practice)