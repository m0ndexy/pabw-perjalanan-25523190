const alamat = "data/proyek.json";

export async function ambilProyek() {
  const respons = await fetch(alamat);
  console.log('status', respons.status, 'ok', respons.ok);
  if (!respons.ok) {
    console.log('throw');
    throw new Error('status ' + respons.status);
  }
  return respons.json();
}

