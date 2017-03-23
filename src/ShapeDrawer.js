const StarDrawer = {
  _drawRect(ctx, dim, backColor) {
    if (!ctx) throw Error('No Canvas context found!');
    ctx.save();
    ctx.width = dim;
    ctx.height = dim;
    ctx.fillStyle = backColor;
    ctx.fillRect(0, 0, dim, dim);
    ctx.restore();
  },
  _star(empty, ctx, x, y, r, p, m, style) {
    if (!ctx) throw Error('No Canvas context found!');
    ctx.save();

    if (empty) {
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.fillStyle = style || 'gold';
    }

    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0, 0-r);
    for (let i = 0; i < p; i++) {
      ctx.rotate(Math.PI / p);
      ctx.lineTo(0, 0 - (r*m));
      ctx.rotate(Math.PI / p);
      ctx.lineTo(0, 0 - r);
    }
    ctx.fill();
    ctx.restore();
  },
  emptyStar(ctx, r, rectBackColor) {
    this._drawRect(ctx, r*2, rectBackColor);
    this._star(true, ctx, r, r, r, 5, 0.5);
  }
};

export default {StarDrawer};
