// Express
const   express = require('express'),
        methodOverride = require('method-override'),
        app = express();
// Configuración de Base de datos
require('./config/database');
// Configuración de puerto para la API
app.set('port', process.env.PORT || 3000);
// Soporte para JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Soporte de métodos DEL y PUT (además de GET y POST clásicos)
app.use(methodOverride('_method'));
// Configuración de rutas
app.use(
    require('./routes/main'), // Rutas principales
    require('./routes/api') // Rutas de la API
);
// Apertura del servidor
app.listen(app.get('port'), () => {
    console.log('Server opened in port', app.get('port'));
});