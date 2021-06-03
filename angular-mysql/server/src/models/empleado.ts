export interface Empleado{
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true
    },
    fechaN: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    fechaIngreso: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true
    }
};