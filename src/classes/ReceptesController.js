const APIURL = 'https://app.nocodb.com/api/v2/tables/mf43qftkiil3yxz/records';
const TOKEN = 'oM9bCiNOHfyovqNhKC6kKdBXCxExmMcpVbi-XItZ';

class ReceptesController {
  constructor() {
    this.apiUrl = APIURL;
    this.token = TOKEN;
  }

  async getAllReceptes(nameUser) {
    const response = await fetch(`${this.apiUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'xc-token': this.token,
      },
    });

    const data = await response.json();
    const userReceptas = data.list.filter((e) => e.user === nameUser?.value);
    return userReceptas;
  }

  async getReceptaById(id) {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'xc-token': this.token,
      },
    });

    return response.json();
  }

  async createRecepta(nom, foto, descripcio) {
    const response = await fetch(`${this.apiUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xc-token': this.token,
      },
      body: JSON.stringify({
        nom,
        foto,
        descripcio,
      }),
    });

    const data = await response.json();
    return data;
  }

  async updateRecepta(id, nom, foto, descripcio) {
    console.log(id, nom, descripcio, foto);
    const response = await fetch(`${this.apiUrl}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'xc-token': this.token,
      },
      body: JSON.stringify({
        id,
        nom,
        foto,
        descripcio,
      }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  }

  async deleteRecepta(id) {
    const response = await fetch(`${this.apiUrl}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'xc-token': this.token,
      },
      body: JSON.stringify({
        Id: id,
      }),
    });

    const data = await response.json();
    return data;
  }

  async updateReceta(id) {
    console.log(id);
  }
}

export default ReceptesController;

/*
// Exemple d'ús:
const apiUrl = 'https://example.com/api';
const token = 'el_teu_token_aqui';

const receptesController = new ReceptesController(apiUrl, token);

// Obté totes les receptes
receptesController.getAllReceptes().then(data => console.log(data));

// Obté una recepta per ID
const receptaId = 1;
receptesController.getRecepteById(receptaId).then(data => console.log(data));

// Crea una nova recepta
const novaRecepta = {
    nom: 'Paella',
    foto: 'paella.jpg',
    descripcio: 'Una deliciosa paella'
};
receptesController.createRecepte(novaRecepta.nom, novaRecepta.foto, novaRecepta.descripcio).then(data => console.log(data));

// Actualitza una recepta existent
const receptaActualitzada = {
    id: 1,
    nom: 'Paella Valenciana',
    foto: 'paella_valenciana.jpg',
    descripcio: 'La veritable paella valenciana'
};
receptesController.updateRecepte(receptaActualitzada.id, receptaActualitzada.nom, receptaActual
*/
