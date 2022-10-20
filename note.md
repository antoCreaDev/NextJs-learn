# Le dossier pages

nos différents vues et routes
Les routes sont auto gérer, il suffit de créer un fichier pour qu'une nouvelle route apparait comme en html classique

pour chaque dossier dans l-pages il faut sont index.js

> pages > index.js
> \_app.js
> blog > index.js

## créer des routes dynamiques

on utilise [slug] ou [id]
pour créer des routes dynamiques

pour link une page externe :
<a href="https://google.com">Google</a>

pour link une page interne :
import Link from 'next/link'
<Link href={`blog/${id}`}>
<a>Blog</a>
</Link>

# dossier public

    ce sui est accessible publiquement, comme nos images

# dossier style

    notre css
    Next js va créer modifier le nom des classes une fois build pour qu'il n'y a pas de souci de conflit entre les composants et les styles
