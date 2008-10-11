=== Accesible _blank ===
Contributors: ceslava
Donate link: http://ceslava.com/blog
Tags: accesible, target, links, SEO, javascript, external, enlaces
Requires at least: 1.5
Tested up to: 2.6
Stable tag: 1.1

Open links in a new window but in a accesible way. 
Abre enlaces en una nueva ventana cumpliendo los est�ndares de accesibilidad.

== Description ==

English:
This plugin searches the text for links outside of the domain of the blog and open them in a new window but in a accesible way. It adds the attribute rel=�external� and by javascript those external links are open in a new window.
It stands for Web Content Accessibility Guidelines.

Spanish:
Est� basado en el plugin para WordPress de Javi Moya External Links New Window que a�ade la funcionalidad de poder abrir enlaces externos en una nueva ventana. El problema es que no era accesible, ya que el atributo _blank no cumple los est�ndares W3C. 
Accesible _blank busca todos los enlaces fuera de tu dominio y les a�ade rel=�external�. Todos los enlaces que tengan el atributo external se abrir�n en una nueva ventana. Es accesible porque el atributo _blank (deprecated) se a�ade por javascript y no en el XHTML.
Para avisar a los usuarios se a�ade el atributo title a los enlaces externos con el texto �(se abre en nueva ventana)�, si title ya tiene contenido se a�ade a �l.
Cumple las Pautas de Accesibilidad al Contenido en la Web (WCAG).



== Installation ==

English:
1. Upload folder `accesible_blank` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. English speakers may edit accesible_blank.js in order to translate the title by default: (se abre en nueva ventana) into english (open in a new window)

Spanish:
1. Sube la carpeta accesible_blank a tu directorio de plugins
2. Act�valo desde el panel de administraci�n de WP.

== Frequently Asked Questions ==

= Next versions | Pr�ximas versiones =

New languages, translations and Panel Administration with some new feautures.

En pr�ximas versiones a�adir� un idiomas y un panel de control para personalizar distintas opciones:

    * aplicar a im�genes
    * aplicar a comentarios
    * especificar dominios para enlaces internos
    * posibilidad de que los usuarios desactiven el plugin
    * desactivar title
    * editar el texto por defecto de title


== Screenshots ==

1. You can see a demo at the official webpage | Demo y p�gina oficial:
[ceslava.com](http://ceslava.com/blog/plugins-wordpress/accesible-_blank/ "Accesible _blank plugin page")




