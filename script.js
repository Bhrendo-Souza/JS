function getAdmins (map){
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin') {                                            
            admins.push(key);
        }
    }
}

const usuarios = new Map();

usuarios.set('Bhrendo DS', 'Admin');
usuarios.set('Lucas ES', 'Admin');
usuarios.set('Vera GD', 'User');
usuarios.set('Dinda DS', 'Admin');

console.log(getAdmins(usuarios));
