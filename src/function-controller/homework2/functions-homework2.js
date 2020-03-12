export const objectPerson = (name, codigo, note1, note2, note3) => {
  const prom = (parseInt(note1) + parseInt(note2) + parseInt(note3))/3
  const object = {
    name,
    codigo,
    note1: parseInt(note1),
    note2: parseInt(note2),
    note3: parseInt(note3),
    prom,
  };
  console.log('Nombre Completo:', name);
  console.log('codigo:', codigo);
  console.log('promedio:', prom);
  return object;
}