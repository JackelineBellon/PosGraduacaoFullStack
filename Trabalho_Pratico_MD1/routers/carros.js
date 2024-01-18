import express from "express";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

const router = express.Router();

router.get("/marcas/maisModelos", async (req, res) => {
  try {
    res.send(ordenarDecrescente(1));
  } catch (err) {
    console.log(err);
  }
});

router.get("/marcas/menosModelos", async (req, res) => {
  try {
    res.send(ordenarCrescente(1));
  } catch (err) {
    console.log(err);
  }
});

router.get("/marcas/maisModelos/:x", async (req, res) => {
  try {
    res.send(ordenarDecrescente(parseInt(req.params.x)));
  } catch (err) {
    console.log(err);
  }
});

router.get("/marcas/menosModelos/:x", async (req, res) => {
  try {
    res.send(ordenarCrescente(parseInt(req.params.x)));
  } catch (err) {
    console.log(err);
  }
});

router.post("/marcas/listaModelos", async (req, res) => {
  try {
    let marca = JSON.stringify(req.body);
    buscarMarca(marca);
  } catch (err) {
    console.log(err);
  }
});

async function lerJson() {
  try {
    const data = await fs.readFile("car-list.json");
    const dataJson = JSON.parse(data);

    const mapMarcaQtdModelo = dataJson.map((brands) => {
      return { marca: brands.brand, qtdeModelo: brands.models.length };
    });

    return mapMarcaQtdModelo;
  } catch (err) {
    console.log(err);
  }
}

async function ordenarCrescente(qtdeImpressao) {
  try {
    const listaCarros = await lerJson();
    const mapCrescente = listaCarros.sort(
      (a, b) => a.qtdeModelo - b.qtdeModelo
    );

    imprimir(
      await verificarQtdeImpressao(qtdeImpressao, mapCrescente.length),
      mapCrescente
    );
  } catch (err) {
    console.log(err);
  }
}

async function ordenarDecrescente(qtdeImpressao) {
  try {
    const listaCarros = await lerJson();
    const mapDecrescente = listaCarros.sort(
      (a, b) => b.qtdeModelo - a.qtdeModelo
    );

    imprimir(
      await verificarQtdeImpressao(qtdeImpressao, mapDecrescente.length),
      mapDecrescente
    );
  } catch (err) {
    console.log(err);
  }
}

async function imprimir(qtdImpressao, listaCarros) {
  try {
    let contador = 0;
    listaCarros.forEach((carro) => {
      if (contador < qtdImpressao) {
        console.log(`Marca: ${carro.marca} - ${carro.qtdeModelo}`);
        contador++;
      }
    });
  } catch (err) {
    console.log(err);
  }
}

async function verificarQtdeImpressao(qtdeImprimir, qtdListaCarros) {
  return qtdeImprimir == 0 ? qtdListaCarros : qtdeImprimir;
}

async function buscarMarca(marca) {
  try {
    const listaCarros = await lerJson();
    const lista = listaCarros.filter((listacarro) => {
      return (
        listacarro.brand &&
        listacarro.brand.toUpperCase() == marca.toUpperCase()
      );
    });

    lista.forEach((modelos) => {
      console.log(modelos.models);
    });
  } catch (err) {
    console.log(err);
  }
}

export default router;
