export async function processFormDataWithFile(request, fileFieldName = 'imageFile') {
  const contentType = request.headers.get('content-type') || '';
  let body = {};
  let file = null;

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();

    for (const [key, value] of formData.entries()) {
      if (key === fileFieldName && value instanceof Blob) {
        file = {
          buffer: Buffer.from(await value.arrayBuffer()),
          originalname: value.name || 'file.dat',
          mimetype: value.type || 'application/octet-stream',
          size: value.size
        };
      } else {
        body[key] = value;
      }
    }
  } else {
    body = await request.json();
  }

  return { body, file };
}