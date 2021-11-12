const DebugBodiesView = true;

// data {img: image, r: rotation, f: flip?}
function drawTransformedImage(data, x, y, w, h) {
  if(!data) { return; }

  ctx.translate(x + w / 2, y + h / 2);

  if(data.f) {
    ctx.scale(-1, 1);
  }
  if(data.r) {
    ctx.rotate(data.r * Math.PI * 2);
  }
  if(data.r === 0.25 || data.r === 0.75) {
    ctx.drawImage(data.img, -h / 2, -w / 2, h, w);
  } else {
    ctx.drawImage(data.img, -w / 2, -h / 2, w, h);
  }
  ctx.setTransform();
}

function drawTile(data, x, y, w, h, xOffset, yOffset) {
  let W = level.fairway[0].length,
    H = level.fairway.length;
  drawTransformedImage(data,
    (x + w / W * xOffset >> 0),
    (y + h / H * yOffset >> 0),
    (x + w / W * (xOffset + 1) >> 0) - (x + w / W * xOffset >> 0),
    (y + h / H * (yOffset + 1) >> 0) - (y + h / H * yOffset >> 0));
}

function drawStaticObject(x, y, mx, my, m, image, s = 1, r = 0, xOffset = 0, yOffset = 0) {
  ctx.translate(x + mx * m, y + my * m);
  ctx.rotate(r * Math.PI * 2);
  ctx.drawImage(image,
    xOffset * m - m * s / 2 >> 0,
    yOffset * m - m * s / 2 >> 0,
    m * s >> 0,
    m * s >> 0);
  ctx.setTransform();
}

function drawObject(x, y, m, obj, image, s = 1, r = 0, xOffset = 0, yOffset = 0, ratio = 1, flipImage) {
  ctx.translate(x, y);
  ctx.translate(obj.c_position.c.x * m, obj.c_position.c.y * m);
  ctx.rotate(obj.getAngle() + r * Math.PI * 2);
  if(flipImage) {
    ctx.scale(-1, 1);
  }
  ctx.drawImage(image, xOffset * m - m * s / 2 >> 0, yOffset * m - m * s / 2 >> 0, m * s >> 0, m * ratio * s >> 0);
  ctx.setTransform();
}

function drawLevel(x, y, w, h) {

}
