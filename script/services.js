const adminInfo = async () => {
  const adminInfo = await fetch("http://localhost:3000/usuarios");
  return adminInfo.json()
}

const datosCategorias = async () => {
  const datosDeCategorias = await fetch("http://localhost:3000/categorias");
  return datosDeCategorias.json()
}

export const datos = {
  adminInfo,
  datosCategorias
}

