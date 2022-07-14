const productos = [
    {
        id: 1,
        nombre: "iPhone 11", 
        marca: "Apple", 
        precio: 25000,
        descripcion: "Pantalla de 6.1 pulgadas y 64GB, 128GB o 256GB de almacenamiento interno. Cámara de 12 MP. Batería de 3110 mAh con carga rápida, y reconocimiento de rostro Face ID para seguridad.", 
        imagen: '../images/iphone11.jpg'
    },
    {
        id: 2, 
        nombre: "Redmi Note 8", 
        marca: "Xiaomi", 
        precio: 15000,
        descripcion: "Pantalla de 6.3 pulgadas Full HD+, 4GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno. La cámara trasera principal de 48MP. Batería de 4000 mAh.",
        imagen: '../images/redminote8.jpg'
    },
    {
        id: 3, 
        nombre: "Galaxy s10", 
        marca: "Samsung", 
        precio: 20000, 
        descripcion: "Tiene una pantalla 6.1 pulgadas, 8GB de RAM y 128GB o 512GB de almacenamiento. La cámara de 16 MP y frontal de 10 MP. Lector de huellas, puerto USB-C, y batería de 3400 mAh con carga inalámbrica.",
        imagen: '../images/galaxys10.jpg'
    },
    {
        id: 4, 
        nombre: "iPhone 12", 
        marca: "Apple", 
        precio: 30000,
        descripcion: "Cuenta con una pantalla de 6.1 pulgadas, 64GB, 128GB o 256GB de almacenamiento interno. Posee dos lentes de 12MP. Reconocimiento Face ID para la seguridad, y carga rápida e inalámbrica.",
        imagen: '../images/iphone12.jpg'
    },
    {
        id: 5, 
        nombre: "Galaxy s22", 
        marca: "Samsung", 
        precio: 17000,
        descripcion: "Cuenta con 6.1 pulgadas a resolución FHD+. 8GB de RAM. Cámara principal de 50MP y frontal de 10MP. Batería de 3700 mAh de carga rápida, y lector de huellas bajo la pantalla.",
        imagen: '../images/galaxys22.jpg'
    },
    {
        id: 6, 
        nombre: "iPhone 13 pro max", 
        marca: "Apple", 
        precio: 30000,
        descripcion: "Posee una pantalla de 6.7 pulgadas, almacenamiento de 128GB, 256GB, 512GB y 1TB. La cámara de 12MP. Face ID, y carga rápida e inalámbrica.",
        imagen: '../images/iphone13promax.jpg'
    },
];

export default productos;

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },2000)
    })
}