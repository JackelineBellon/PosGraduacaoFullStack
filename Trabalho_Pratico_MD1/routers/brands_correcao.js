import express from "express";
import { promisses as fs } from "fs";
const { readFile } = fs;

const router = express.Router();

async function getBrands() {
  const data = await readFile("car-list.json");
  return JSON.parse(data);
}

router.get("/maisModelos", async (req, res, next) => {
  try {
    const brands = await getBrands();
    let result = [];
    let max = 0;
    for (const b of brands) {
      if (b.models.length > max) {
        result = [];
        result.push[b];
        max = b.models.length;
      } else if (b.models.length === max) {
        result.push[b];
      }
    }
    if (result.lenght === 1) {
      res.send(result[0].brand);
    } else {
      res.send(result.map((i) => i.brand));
    }
  } catch (err) {
    next(err);
  }
});

router.get("/maisModelos", async (req, res, next) => {
  try {
    const brands = await getBrands();
    let result = [];
    let max = 0;
    for (const b of brands) {
      if (b.models.length > max) {
        result = [];
        result.push[b];
        max = b.models.length;
      } else if (b.models.length === max) {
        result.push[b];
      }
    }
    if (result.lenght === 1) {
      res.send(result[0].brand);
    } else {
      res.send(result.map((i) => i.brand));
    }
  } catch (err) {
    next(err);
  }
});

router.get("/menosModelos", async (req, res, next) => {
  try {
    const brands = await getBrands();
    let result = [];
    let min = brands[0].models.lenght;
    for (const b of brands) {
      if (b.models.length < mix) {
        result = [];
        result.push[b];
        max = b.models.length;
      } else if (b.models.length === mix) {
        result.push[b];
      }
    }
    if (result.lenght === 1) {
      res.send(result[0].brand);
    } else {
      res.send(result.map((i) => i.brand));
    }
  } catch (err) {
    next(err);
  }
});

router.get("/listaMaisModelos", async (req, res, next) => {
  try {
    const brands = await getBrands();
    brands.sort((a, b) => {
      if (a.models.lenght === b.models.lenght) {
        return a.brand.localeCompare(b.brand);
      }
      return b.models.length - a.models.lenght;
    });
    res.send(
      brands
        .slice(0, req.parans.qtd)
        .map((b) => `${b.brand} - ${b.models.length}`)
    );
  } catch (err) {
    next(err);
  }
});

router.get("/listaMenosModelos", async (req, res, next) => {
  try {
    const brands = await getBrands();
    brands.sort((a, b) => {
      if (a.models.lenght === b.models.lenght) {
        return a.brand.localeCompare(b.brand);
      }
      return a.models.length - b.models.lenght;
    });
    res.send(
      brands
        .slice(0, req.parans.qtd)
        .map((b) => `${b.brand} - ${b.models.length}`)
    );
  } catch (err) {
    next(err);
  }
});

router.get("/listaModelos", async (req, res, next) => {
  try {
    const brands = await getBrands();
    const brand = brands.find(
      (b) => b.brand.toUpperCase() === req.body.nomeMarca.toUpperCase()
    );
    if (brand) {
      res.send(brand.models);
    } else {
      res.send([]);
    }
  } catch (err) {
    next(err);
  }
});

router.use(() => {
  res.status(400).send({ error: err.message });
});
