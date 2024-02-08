import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function getAccounts() {
  const data = JSON.parse(await readFile(global.fileName));
  return data.accounts;
}

async function getAccount(id) {
  const accounts = await getAccounts();
  const account = accounts.find((account) => account.id === parseInt(id));
  return account;
}

async function insertAccount(account) {
  const data = JSON.parse(await readFile(global.fileName));

  account = {
    id: data.nextId++,
    name: account.name,
    balance: account.balance,
  };
  data.accounts.push(account);

  await writeFile(global.fileName, JSON.stringify(data, null, 2));

  return account;
}

async function deleteAccount(id) {
  const data = JSON.parse(await readFile(global.fileName));
  data.accounts = data.accounts.filter(
    (account) => account.id !== parseInt(id)
  );

  await writeFile(global.fileName, JSON.stringify(data, null, 2));
}

async function updateAccount(account) {
  const accounts = getAccount();
  const index = accounts.findIndex((a) => a.id === account.id);

  data.accounts[index].name = account.name;
  data.accounts[index].balance = account.balance;

  await writeFile(global.fileName, JSON.stringify(data));
  return data.accounts[index];
}

export default {
  getAccounts,
  getAccount,
  insertAccount,
  deleteAccount,
  updateAccount,
};
