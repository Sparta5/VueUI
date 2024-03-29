// https://d3js.org/d3-geo/ v3.0.1 Copyright 2010-2021 Mike Bostock, 2008-2012 Charles Karney
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("d3-array"))
    : "function" == typeof define && define.amd
    ? define(["exports", "d3-array"], t)
    : t(
        ((n = "undefined" != typeof globalThis ? globalThis : n || self).d3 =
          n.d3 || {}),
        n.d3
      );
})(this, function (n, t) {
  "use strict";
  var r = 1e-6,
    e = 1e-12,
    i = Math.PI,
    o = i / 2,
    u = i / 4,
    a = 2 * i,
    c = 180 / i,
    l = i / 180,
    f = Math.abs,
    p = Math.atan,
    s = Math.atan2,
    h = Math.cos,
    g = Math.ceil,
    v = Math.exp,
    d = Math.hypot,
    E = Math.log,
    y = Math.pow,
    S = Math.sin,
    m =
      Math.sign ||
      function (n) {
        return n > 0 ? 1 : n < 0 ? -1 : 0;
      },
    M = Math.sqrt,
    x = Math.tan;
  function w(n) {
    return n > 1 ? 0 : n < -1 ? i : Math.acos(n);
  }
  function _(n) {
    return n > 1 ? o : n < -1 ? -o : Math.asin(n);
  }
  function N(n) {
    return (n = S(n / 2)) * n;
  }
  function A() {}
  function R(n, t) {
    n && P.hasOwnProperty(n.type) && P[n.type](n, t);
  }
  var C = {
      Feature: function (n, t) {
        R(n.geometry, t);
      },
      FeatureCollection: function (n, t) {
        for (var r = n.features, e = -1, i = r.length; ++e < i; )
          R(r[e].geometry, t);
      },
    },
    P = {
      Sphere: function (n, t) {
        t.sphere();
      },
      Point: function (n, t) {
        (n = n.coordinates), t.point(n[0], n[1], n[2]);
      },
      MultiPoint: function (n, t) {
        for (var r = n.coordinates, e = -1, i = r.length; ++e < i; )
          (n = r[e]), t.point(n[0], n[1], n[2]);
      },
      LineString: function (n, t) {
        j(n.coordinates, t, 0);
      },
      MultiLineString: function (n, t) {
        for (var r = n.coordinates, e = -1, i = r.length; ++e < i; )
          j(r[e], t, 0);
      },
      Polygon: function (n, t) {
        q(n.coordinates, t);
      },
      MultiPolygon: function (n, t) {
        for (var r = n.coordinates, e = -1, i = r.length; ++e < i; ) q(r[e], t);
      },
      GeometryCollection: function (n, t) {
        for (var r = n.geometries, e = -1, i = r.length; ++e < i; ) R(r[e], t);
      },
    };
  function j(n, t, r) {
    var e,
      i = -1,
      o = n.length - r;
    for (t.lineStart(); ++i < o; ) (e = n[i]), t.point(e[0], e[1], e[2]);
    t.lineEnd();
  }
  function q(n, t) {
    var r = -1,
      e = n.length;
    for (t.polygonStart(); ++r < e; ) j(n[r], t, 1);
    t.polygonEnd();
  }
  function b(n, t) {
    n && C.hasOwnProperty(n.type) ? C[n.type](n, t) : R(n, t);
  }
  var z,
    L,
    T,
    O,
    G,
    k,
    F,
    H,
    I,
    W,
    X,
    Y,
    B,
    D,
    U,
    Z,
    J = new t.Adder(),
    K = new t.Adder(),
    Q = {
      point: A,
      lineStart: A,
      lineEnd: A,
      polygonStart: function () {
        (J = new t.Adder()), (Q.lineStart = V), (Q.lineEnd = $);
      },
      polygonEnd: function () {
        var n = +J;
        K.add(n < 0 ? a + n : n),
          (this.lineStart = this.lineEnd = this.point = A);
      },
      sphere: function () {
        K.add(a);
      },
    };
  function V() {
    Q.point = nn;
  }
  function $() {
    tn(z, L);
  }
  function nn(n, t) {
    (Q.point = tn),
      (z = n),
      (L = t),
      (T = n *= l),
      (O = h((t = (t *= l) / 2 + u))),
      (G = S(t));
  }
  function tn(n, t) {
    var r = (n *= l) - T,
      e = r >= 0 ? 1 : -1,
      i = e * r,
      o = h((t = (t *= l) / 2 + u)),
      a = S(t),
      c = G * a,
      f = O * o + c * h(i),
      p = c * e * S(i);
    J.add(s(p, f)), (T = n), (O = o), (G = a);
  }
  function rn(n) {
    return [s(n[1], n[0]), _(n[2])];
  }
  function en(n) {
    var t = n[0],
      r = n[1],
      e = h(r);
    return [e * h(t), e * S(t), S(r)];
  }
  function on(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
  }
  function un(n, t) {
    return [
      n[1] * t[2] - n[2] * t[1],
      n[2] * t[0] - n[0] * t[2],
      n[0] * t[1] - n[1] * t[0],
    ];
  }
  function an(n, t) {
    (n[0] += t[0]), (n[1] += t[1]), (n[2] += t[2]);
  }
  function cn(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t];
  }
  function ln(n) {
    var t = M(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    (n[0] /= t), (n[1] /= t), (n[2] /= t);
  }
  var fn,
    pn,
    sn,
    hn,
    gn,
    vn,
    dn,
    En,
    yn,
    Sn,
    mn,
    Mn,
    xn,
    wn,
    _n,
    Nn,
    An = {
      point: Rn,
      lineStart: Pn,
      lineEnd: jn,
      polygonStart: function () {
        (An.point = qn),
          (An.lineStart = bn),
          (An.lineEnd = zn),
          (D = new t.Adder()),
          Q.polygonStart();
      },
      polygonEnd: function () {
        Q.polygonEnd(),
          (An.point = Rn),
          (An.lineStart = Pn),
          (An.lineEnd = jn),
          J < 0
            ? ((k = -(H = 180)), (F = -(I = 90)))
            : D > r
            ? (I = 90)
            : D < -r && (F = -90),
          (Z[0] = k),
          (Z[1] = H);
      },
      sphere: function () {
        (k = -(H = 180)), (F = -(I = 90));
      },
    };
  function Rn(n, t) {
    U.push((Z = [(k = n), (H = n)])), t < F && (F = t), t > I && (I = t);
  }
  function Cn(n, t) {
    var r = en([n * l, t * l]);
    if (B) {
      var e = un(B, r),
        i = un([e[1], -e[0], 0], e);
      ln(i), (i = rn(i));
      var o,
        u = n - W,
        a = u > 0 ? 1 : -1,
        p = i[0] * c * a,
        s = f(u) > 180;
      s ^ (a * W < p && p < a * n)
        ? (o = i[1] * c) > I && (I = o)
        : s ^ (a * W < (p = ((p + 360) % 360) - 180) && p < a * n)
        ? (o = -i[1] * c) < F && (F = o)
        : (t < F && (F = t), t > I && (I = t)),
        s
          ? n < W
            ? Ln(k, n) > Ln(k, H) && (H = n)
            : Ln(n, H) > Ln(k, H) && (k = n)
          : H >= k
          ? (n < k && (k = n), n > H && (H = n))
          : n > W
          ? Ln(k, n) > Ln(k, H) && (H = n)
          : Ln(n, H) > Ln(k, H) && (k = n);
    } else U.push((Z = [(k = n), (H = n)]));
    t < F && (F = t), t > I && (I = t), (B = r), (W = n);
  }
  function Pn() {
    An.point = Cn;
  }
  function jn() {
    (Z[0] = k), (Z[1] = H), (An.point = Rn), (B = null);
  }
  function qn(n, t) {
    if (B) {
      var r = n - W;
      D.add(f(r) > 180 ? r + (r > 0 ? 360 : -360) : r);
    } else (X = n), (Y = t);
    Q.point(n, t), Cn(n, t);
  }
  function bn() {
    Q.lineStart();
  }
  function zn() {
    qn(X, Y),
      Q.lineEnd(),
      f(D) > r && (k = -(H = 180)),
      (Z[0] = k),
      (Z[1] = H),
      (B = null);
  }
  function Ln(n, t) {
    return (t -= n) < 0 ? t + 360 : t;
  }
  function Tn(n, t) {
    return n[0] - t[0];
  }
  function On(n, t) {
    return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t;
  }
  var Gn = {
    sphere: A,
    point: kn,
    lineStart: Hn,
    lineEnd: Xn,
    polygonStart: function () {
      (Gn.lineStart = Yn), (Gn.lineEnd = Bn);
    },
    polygonEnd: function () {
      (Gn.lineStart = Hn), (Gn.lineEnd = Xn);
    },
  };
  function kn(n, t) {
    n *= l;
    var r = h((t *= l));
    Fn(r * h(n), r * S(n), S(t));
  }
  function Fn(n, t, r) {
    ++fn, (sn += (n - sn) / fn), (hn += (t - hn) / fn), (gn += (r - gn) / fn);
  }
  function Hn() {
    Gn.point = In;
  }
  function In(n, t) {
    n *= l;
    var r = h((t *= l));
    (wn = r * h(n)),
      (_n = r * S(n)),
      (Nn = S(t)),
      (Gn.point = Wn),
      Fn(wn, _n, Nn);
  }
  function Wn(n, t) {
    n *= l;
    var r = h((t *= l)),
      e = r * h(n),
      i = r * S(n),
      o = S(t),
      u = s(
        M(
          (u = _n * o - Nn * i) * u +
            (u = Nn * e - wn * o) * u +
            (u = wn * i - _n * e) * u
        ),
        wn * e + _n * i + Nn * o
      );
    (pn += u),
      (vn += u * (wn + (wn = e))),
      (dn += u * (_n + (_n = i))),
      (En += u * (Nn + (Nn = o))),
      Fn(wn, _n, Nn);
  }
  function Xn() {
    Gn.point = kn;
  }
  function Yn() {
    Gn.point = Dn;
  }
  function Bn() {
    Un(Mn, xn), (Gn.point = kn);
  }
  function Dn(n, t) {
    (Mn = n), (xn = t), (n *= l), (t *= l), (Gn.point = Un);
    var r = h(t);
    (wn = r * h(n)), (_n = r * S(n)), (Nn = S(t)), Fn(wn, _n, Nn);
  }
  function Un(n, t) {
    n *= l;
    var r = h((t *= l)),
      e = r * h(n),
      i = r * S(n),
      o = S(t),
      u = _n * o - Nn * i,
      a = Nn * e - wn * o,
      c = wn * i - _n * e,
      f = d(u, a, c),
      p = _(f),
      s = f && -p / f;
    yn.add(s * u),
      Sn.add(s * a),
      mn.add(s * c),
      (pn += p),
      (vn += p * (wn + (wn = e))),
      (dn += p * (_n + (_n = i))),
      (En += p * (Nn + (Nn = o))),
      Fn(wn, _n, Nn);
  }
  function Zn(n) {
    return function () {
      return n;
    };
  }
  function Jn(n, t) {
    function r(r, e) {
      return (r = n(r, e)), t(r[0], r[1]);
    }
    return (
      n.invert &&
        t.invert &&
        (r.invert = function (r, e) {
          return (r = t.invert(r, e)) && n.invert(r[0], r[1]);
        }),
      r
    );
  }
  function Kn(n, t) {
    return [f(n) > i ? n + Math.round(-n / a) * a : n, t];
  }
  function Qn(n, t, r) {
    return (n %= a)
      ? t || r
        ? Jn($n(n), nt(t, r))
        : $n(n)
      : t || r
      ? nt(t, r)
      : Kn;
  }
  function Vn(n) {
    return function (t, r) {
      return [(t += n) > i ? t - a : t < -i ? t + a : t, r];
    };
  }
  function $n(n) {
    var t = Vn(n);
    return (t.invert = Vn(-n)), t;
  }
  function nt(n, t) {
    var r = h(n),
      e = S(n),
      i = h(t),
      o = S(t);
    function u(n, t) {
      var u = h(t),
        a = h(n) * u,
        c = S(n) * u,
        l = S(t),
        f = l * r + a * e;
      return [s(c * i - f * o, a * r - l * e), _(f * i + c * o)];
    }
    return (
      (u.invert = function (n, t) {
        var u = h(t),
          a = h(n) * u,
          c = S(n) * u,
          l = S(t),
          f = l * i - c * o;
        return [s(c * i + l * o, a * r + f * e), _(f * r - a * e)];
      }),
      u
    );
  }
  function tt(n) {
    function t(t) {
      return ((t = n(t[0] * l, t[1] * l))[0] *= c), (t[1] *= c), t;
    }
    return (
      (n = Qn(n[0] * l, n[1] * l, n.length > 2 ? n[2] * l : 0)),
      (t.invert = function (t) {
        return ((t = n.invert(t[0] * l, t[1] * l))[0] *= c), (t[1] *= c), t;
      }),
      t
    );
  }
  function rt(n, t, r, e, i, o) {
    if (r) {
      var u = h(t),
        c = S(t),
        l = e * r;
      null == i
        ? ((i = t + e * a), (o = t - l / 2))
        : ((i = et(u, i)),
          (o = et(u, o)),
          (e > 0 ? i < o : i > o) && (i += e * a));
      for (var f, p = i; e > 0 ? p > o : p < o; p -= l)
        (f = rn([u, -c * h(p), -c * S(p)])), n.point(f[0], f[1]);
    }
  }
  function et(n, t) {
    ((t = en(t))[0] -= n), ln(t);
    var e = w(-t[1]);
    return ((-t[2] < 0 ? -e : e) + a - r) % a;
  }
  function it() {
    var n,
      t = [];
    return {
      point: function (t, r, e) {
        n.push([t, r, e]);
      },
      lineStart: function () {
        t.push((n = []));
      },
      lineEnd: A,
      rejoin: function () {
        t.length > 1 && t.push(t.pop().concat(t.shift()));
      },
      result: function () {
        var r = t;
        return (t = []), (n = null), r;
      },
    };
  }
  function ot(n, t) {
    return f(n[0] - t[0]) < r && f(n[1] - t[1]) < r;
  }
  function ut(n, t, r, e) {
    (this.x = n),
      (this.z = t),
      (this.o = r),
      (this.e = e),
      (this.v = !1),
      (this.n = this.p = null);
  }
  function at(n, t, r, e, i) {
    var o,
      u,
      a = [],
      c = [];
    if (
      (n.forEach(function (n) {
        if (!((t = n.length - 1) <= 0)) {
          var t,
            r,
            e = n[0],
            u = n[t];
          if (ot(e, u)) {
            if (!e[2] && !u[2]) {
              for (i.lineStart(), o = 0; o < t; ++o)
                i.point((e = n[o])[0], e[1]);
              return void i.lineEnd();
            }
            u[0] += 2e-6;
          }
          a.push((r = new ut(e, n, null, !0))),
            c.push((r.o = new ut(e, null, r, !1))),
            a.push((r = new ut(u, n, null, !1))),
            c.push((r.o = new ut(u, null, r, !0)));
        }
      }),
      a.length)
    ) {
      for (c.sort(t), ct(a), ct(c), o = 0, u = c.length; o < u; ++o)
        c[o].e = r = !r;
      for (var l, f, p = a[0]; ; ) {
        for (var s = p, h = !0; s.v; ) if ((s = s.n) === p) return;
        (l = s.z), i.lineStart();
        do {
          if (((s.v = s.o.v = !0), s.e)) {
            if (h)
              for (o = 0, u = l.length; o < u; ++o)
                i.point((f = l[o])[0], f[1]);
            else e(s.x, s.n.x, 1, i);
            s = s.n;
          } else {
            if (h)
              for (l = s.p.z, o = l.length - 1; o >= 0; --o)
                i.point((f = l[o])[0], f[1]);
            else e(s.x, s.p.x, -1, i);
            s = s.p;
          }
          (l = (s = s.o).z), (h = !h);
        } while (!s.v);
        i.lineEnd();
      }
    }
  }
  function ct(n) {
    if ((t = n.length)) {
      for (var t, r, e = 0, i = n[0]; ++e < t; )
        (i.n = r = n[e]), (r.p = i), (i = r);
      (i.n = r = n[0]), (r.p = i);
    }
  }
  function lt(n) {
    return f(n[0]) <= i ? n[0] : m(n[0]) * (((f(n[0]) + i) % a) - i);
  }
  function ft(n, e) {
    var c = lt(e),
      l = e[1],
      f = S(l),
      p = [S(c), -h(c), 0],
      g = 0,
      v = 0,
      d = new t.Adder();
    1 === f ? (l = o + r) : -1 === f && (l = -o - r);
    for (var E = 0, y = n.length; E < y; ++E)
      if ((M = (m = n[E]).length))
        for (
          var m,
            M,
            x = m[M - 1],
            w = lt(x),
            N = x[1] / 2 + u,
            A = S(N),
            R = h(N),
            C = 0;
          C < M;
          ++C, w = j, A = b, R = z, x = P
        ) {
          var P = m[C],
            j = lt(P),
            q = P[1] / 2 + u,
            b = S(q),
            z = h(q),
            L = j - w,
            T = L >= 0 ? 1 : -1,
            O = T * L,
            G = O > i,
            k = A * b;
          if (
            (d.add(s(k * T * S(O), R * z + k * h(O))),
            (g += G ? L + T * a : L),
            G ^ (w >= c) ^ (j >= c))
          ) {
            var F = un(en(x), en(P));
            ln(F);
            var H = un(p, F);
            ln(H);
            var I = (G ^ (L >= 0) ? -1 : 1) * _(H[2]);
            (l > I || (l === I && (F[0] || F[1]))) &&
              (v += G ^ (L >= 0) ? 1 : -1);
          }
        }
    return (g < -r || (g < r && d < -1e-12)) ^ (1 & v);
  }
  function pt(n, r, e, i) {
    return function (o) {
      var u,
        a,
        c,
        l = r(o),
        f = it(),
        p = r(f),
        s = !1,
        h = {
          point: g,
          lineStart: d,
          lineEnd: E,
          polygonStart: function () {
            (h.point = y),
              (h.lineStart = S),
              (h.lineEnd = m),
              (a = []),
              (u = []);
          },
          polygonEnd: function () {
            (h.point = g), (h.lineStart = d), (h.lineEnd = E), (a = t.merge(a));
            var n = ft(u, i);
            a.length
              ? (s || (o.polygonStart(), (s = !0)), at(a, ht, n, e, o))
              : n &&
                (s || (o.polygonStart(), (s = !0)),
                o.lineStart(),
                e(null, null, 1, o),
                o.lineEnd()),
              s && (o.polygonEnd(), (s = !1)),
              (a = u = null);
          },
          sphere: function () {
            o.polygonStart(),
              o.lineStart(),
              e(null, null, 1, o),
              o.lineEnd(),
              o.polygonEnd();
          },
        };
      function g(t, r) {
        n(t, r) && o.point(t, r);
      }
      function v(n, t) {
        l.point(n, t);
      }
      function d() {
        (h.point = v), l.lineStart();
      }
      function E() {
        (h.point = g), l.lineEnd();
      }
      function y(n, t) {
        c.push([n, t]), p.point(n, t);
      }
      function S() {
        p.lineStart(), (c = []);
      }
      function m() {
        y(c[0][0], c[0][1]), p.lineEnd();
        var n,
          t,
          r,
          e,
          i = p.clean(),
          l = f.result(),
          h = l.length;
        if ((c.pop(), u.push(c), (c = null), h))
          if (1 & i) {
            if ((t = (r = l[0]).length - 1) > 0) {
              for (
                s || (o.polygonStart(), (s = !0)), o.lineStart(), n = 0;
                n < t;
                ++n
              )
                o.point((e = r[n])[0], e[1]);
              o.lineEnd();
            }
          } else
            h > 1 && 2 & i && l.push(l.pop().concat(l.shift())),
              a.push(l.filter(st));
      }
      return h;
    };
  }
  function st(n) {
    return n.length > 1;
  }
  function ht(n, t) {
    return (
      ((n = n.x)[0] < 0 ? n[1] - o - r : o - n[1]) -
      ((t = t.x)[0] < 0 ? t[1] - o - r : o - t[1])
    );
  }
  Kn.invert = Kn;
  var gt = pt(
    function () {
      return !0;
    },
    function (n) {
      var t,
        e = NaN,
        u = NaN,
        a = NaN;
      return {
        lineStart: function () {
          n.lineStart(), (t = 1);
        },
        point: function (c, l) {
          var s = c > 0 ? i : -i,
            g = f(c - e);
          f(g - i) < r
            ? (n.point(e, (u = (u + l) / 2 > 0 ? o : -o)),
              n.point(a, u),
              n.lineEnd(),
              n.lineStart(),
              n.point(s, u),
              n.point(c, u),
              (t = 0))
            : a !== s &&
              g >= i &&
              (f(e - a) < r && (e -= a * r),
              f(c - s) < r && (c -= s * r),
              (u = (function (n, t, e, i) {
                var o,
                  u,
                  a = S(n - e);
                return f(a) > r
                  ? p(
                      (S(t) * (u = h(i)) * S(e) - S(i) * (o = h(t)) * S(n)) /
                        (o * u * a)
                    )
                  : (t + i) / 2;
              })(e, u, c, l)),
              n.point(a, u),
              n.lineEnd(),
              n.lineStart(),
              n.point(s, u),
              (t = 0)),
            n.point((e = c), (u = l)),
            (a = s);
        },
        lineEnd: function () {
          n.lineEnd(), (e = u = NaN);
        },
        clean: function () {
          return 2 - t;
        },
      };
    },
    function (n, t, e, u) {
      var a;
      if (null == n)
        (a = e * o),
          u.point(-i, a),
          u.point(0, a),
          u.point(i, a),
          u.point(i, 0),
          u.point(i, -a),
          u.point(0, -a),
          u.point(-i, -a),
          u.point(-i, 0),
          u.point(-i, a);
      else if (f(n[0] - t[0]) > r) {
        var c = n[0] < t[0] ? i : -i;
        (a = (e * c) / 2), u.point(-c, a), u.point(0, a), u.point(c, a);
      } else u.point(t[0], t[1]);
    },
    [-i, -o]
  );
  function vt(n) {
    var t = h(n),
      e = 6 * l,
      o = t > 0,
      u = f(t) > r;
    function a(n, r) {
      return h(n) * h(r) > t;
    }
    function c(n, e, o) {
      var u = [1, 0, 0],
        a = un(en(n), en(e)),
        c = on(a, a),
        l = a[0],
        p = c - l * l;
      if (!p) return !o && n;
      var s = (t * c) / p,
        h = (-t * l) / p,
        g = un(u, a),
        v = cn(u, s);
      an(v, cn(a, h));
      var d = g,
        E = on(v, d),
        y = on(d, d),
        S = E * E - y * (on(v, v) - 1);
      if (!(S < 0)) {
        var m = M(S),
          x = cn(d, (-E - m) / y);
        if ((an(x, v), (x = rn(x)), !o)) return x;
        var w,
          _ = n[0],
          N = e[0],
          A = n[1],
          R = e[1];
        N < _ && ((w = _), (_ = N), (N = w));
        var C = N - _,
          P = f(C - i) < r;
        if (
          (!P && R < A && ((w = A), (A = R), (R = w)),
          P || C < r
            ? P
              ? (A + R > 0) ^ (x[1] < (f(x[0] - _) < r ? A : R))
              : A <= x[1] && x[1] <= R
            : (C > i) ^ (_ <= x[0] && x[0] <= N))
        ) {
          var j = cn(d, (-E + m) / y);
          return an(j, v), [x, rn(j)];
        }
      }
    }
    function p(t, r) {
      var e = o ? n : i - n,
        u = 0;
      return (
        t < -e ? (u |= 1) : t > e && (u |= 2),
        r < -e ? (u |= 4) : r > e && (u |= 8),
        u
      );
    }
    return pt(
      a,
      function (n) {
        var t, r, e, l, f;
        return {
          lineStart: function () {
            (l = e = !1), (f = 1);
          },
          point: function (s, h) {
            var g,
              v = [s, h],
              d = a(s, h),
              E = o ? (d ? 0 : p(s, h)) : d ? p(s + (s < 0 ? i : -i), h) : 0;
            if (
              (!t && (l = e = d) && n.lineStart(),
              d !== e && (!(g = c(t, v)) || ot(t, g) || ot(v, g)) && (v[2] = 1),
              d !== e)
            )
              (f = 0),
                d
                  ? (n.lineStart(), (g = c(v, t)), n.point(g[0], g[1]))
                  : ((g = c(t, v)), n.point(g[0], g[1], 2), n.lineEnd()),
                (t = g);
            else if (u && t && o ^ d) {
              var y;
              E & r ||
                !(y = c(v, t, !0)) ||
                ((f = 0),
                o
                  ? (n.lineStart(),
                    n.point(y[0][0], y[0][1]),
                    n.point(y[1][0], y[1][1]),
                    n.lineEnd())
                  : (n.point(y[1][0], y[1][1]),
                    n.lineEnd(),
                    n.lineStart(),
                    n.point(y[0][0], y[0][1], 3)));
            }
            !d || (t && ot(t, v)) || n.point(v[0], v[1]),
              (t = v),
              (e = d),
              (r = E);
          },
          lineEnd: function () {
            e && n.lineEnd(), (t = null);
          },
          clean: function () {
            return f | ((l && e) << 1);
          },
        };
      },
      function (t, r, i, o) {
        rt(o, n, e, i, t, r);
      },
      o ? [0, -n] : [-i, n - i]
    );
  }
  var dt,
    Et,
    yt,
    St,
    mt = 1e9,
    Mt = -mt;
  function xt(n, e, i, o) {
    function u(t, r) {
      return n <= t && t <= i && e <= r && r <= o;
    }
    function a(t, r, u, a) {
      var l = 0,
        f = 0;
      if (
        null == t ||
        (l = c(t, u)) !== (f = c(r, u)) ||
        (p(t, r) < 0) ^ (u > 0)
      )
        do {
          a.point(0 === l || 3 === l ? n : i, l > 1 ? o : e);
        } while ((l = (l + u + 4) % 4) !== f);
      else a.point(r[0], r[1]);
    }
    function c(t, o) {
      return f(t[0] - n) < r
        ? o > 0
          ? 0
          : 3
        : f(t[0] - i) < r
        ? o > 0
          ? 2
          : 1
        : f(t[1] - e) < r
        ? o > 0
          ? 1
          : 0
        : o > 0
        ? 3
        : 2;
    }
    function l(n, t) {
      return p(n.x, t.x);
    }
    function p(n, t) {
      var r = c(n, 1),
        e = c(t, 1);
      return r !== e
        ? r - e
        : 0 === r
        ? t[1] - n[1]
        : 1 === r
        ? n[0] - t[0]
        : 2 === r
        ? n[1] - t[1]
        : t[0] - n[0];
    }
    return function (r) {
      var c,
        f,
        p,
        s,
        h,
        g,
        v,
        d,
        E,
        y,
        S,
        m = r,
        M = it(),
        x = {
          point: w,
          lineStart: function () {
            (x.point = _), f && f.push((p = []));
            (y = !0), (E = !1), (v = d = NaN);
          },
          lineEnd: function () {
            c && (_(s, h), g && E && M.rejoin(), c.push(M.result()));
            (x.point = w), E && m.lineEnd();
          },
          polygonStart: function () {
            (m = M), (c = []), (f = []), (S = !0);
          },
          polygonEnd: function () {
            var e = (function () {
                for (var t = 0, r = 0, e = f.length; r < e; ++r)
                  for (
                    var i,
                      u,
                      a = f[r],
                      c = 1,
                      l = a.length,
                      p = a[0],
                      s = p[0],
                      h = p[1];
                    c < l;
                    ++c
                  )
                    (i = s),
                      (u = h),
                      (s = (p = a[c])[0]),
                      (h = p[1]),
                      u <= o
                        ? h > o && (s - i) * (o - u) > (h - u) * (n - i) && ++t
                        : h <= o &&
                          (s - i) * (o - u) < (h - u) * (n - i) &&
                          --t;
                return t;
              })(),
              i = S && e,
              u = (c = t.merge(c)).length;
            (i || u) &&
              (r.polygonStart(),
              i && (r.lineStart(), a(null, null, 1, r), r.lineEnd()),
              u && at(c, l, e, a, r),
              r.polygonEnd());
            (m = r), (c = f = p = null);
          },
        };
      function w(n, t) {
        u(n, t) && m.point(n, t);
      }
      function _(t, r) {
        var a = u(t, r);
        if ((f && p.push([t, r]), y))
          (s = t),
            (h = r),
            (g = a),
            (y = !1),
            a && (m.lineStart(), m.point(t, r));
        else if (a && E) m.point(t, r);
        else {
          var c = [
              (v = Math.max(Mt, Math.min(mt, v))),
              (d = Math.max(Mt, Math.min(mt, d))),
            ],
            l = [
              (t = Math.max(Mt, Math.min(mt, t))),
              (r = Math.max(Mt, Math.min(mt, r))),
            ];
          !(function (n, t, r, e, i, o) {
            var u,
              a = n[0],
              c = n[1],
              l = 0,
              f = 1,
              p = t[0] - a,
              s = t[1] - c;
            if (((u = r - a), p || !(u > 0))) {
              if (((u /= p), p < 0)) {
                if (u < l) return;
                u < f && (f = u);
              } else if (p > 0) {
                if (u > f) return;
                u > l && (l = u);
              }
              if (((u = i - a), p || !(u < 0))) {
                if (((u /= p), p < 0)) {
                  if (u > f) return;
                  u > l && (l = u);
                } else if (p > 0) {
                  if (u < l) return;
                  u < f && (f = u);
                }
                if (((u = e - c), s || !(u > 0))) {
                  if (((u /= s), s < 0)) {
                    if (u < l) return;
                    u < f && (f = u);
                  } else if (s > 0) {
                    if (u > f) return;
                    u > l && (l = u);
                  }
                  if (((u = o - c), s || !(u < 0))) {
                    if (((u /= s), s < 0)) {
                      if (u > f) return;
                      u > l && (l = u);
                    } else if (s > 0) {
                      if (u < l) return;
                      u < f && (f = u);
                    }
                    return (
                      l > 0 && ((n[0] = a + l * p), (n[1] = c + l * s)),
                      f < 1 && ((t[0] = a + f * p), (t[1] = c + f * s)),
                      !0
                    );
                  }
                }
              }
            }
          })(c, l, n, e, i, o)
            ? a && (m.lineStart(), m.point(t, r), (S = !1))
            : (E || (m.lineStart(), m.point(c[0], c[1])),
              m.point(l[0], l[1]),
              a || m.lineEnd(),
              (S = !1));
        }
        (v = t), (d = r), (E = a);
      }
      return x;
    };
  }
  var wt = {
    sphere: A,
    point: A,
    lineStart: function () {
      (wt.point = Nt), (wt.lineEnd = _t);
    },
    lineEnd: A,
    polygonStart: A,
    polygonEnd: A,
  };
  function _t() {
    wt.point = wt.lineEnd = A;
  }
  function Nt(n, t) {
    (Et = n *= l), (yt = S((t *= l))), (St = h(t)), (wt.point = At);
  }
  function At(n, t) {
    n *= l;
    var r = S((t *= l)),
      e = h(t),
      i = f(n - Et),
      o = h(i),
      u = e * S(i),
      a = St * r - yt * e * o,
      c = yt * r + St * e * o;
    dt.add(s(M(u * u + a * a), c)), (Et = n), (yt = r), (St = e);
  }
  function Rt(n) {
    return (dt = new t.Adder()), b(n, wt), +dt;
  }
  var Ct = [null, null],
    Pt = { type: "LineString", coordinates: Ct };
  function jt(n, t) {
    return (Ct[0] = n), (Ct[1] = t), Rt(Pt);
  }
  var qt = {
      Feature: function (n, t) {
        return zt(n.geometry, t);
      },
      FeatureCollection: function (n, t) {
        for (var r = n.features, e = -1, i = r.length; ++e < i; )
          if (zt(r[e].geometry, t)) return !0;
        return !1;
      },
    },
    bt = {
      Sphere: function () {
        return !0;
      },
      Point: function (n, t) {
        return Lt(n.coordinates, t);
      },
      MultiPoint: function (n, t) {
        for (var r = n.coordinates, e = -1, i = r.length; ++e < i; )
          if (Lt(r[e], t)) return !0;
        return !1;
      },
      LineString: function (n, t) {
        return Tt(n.coordinates, t);
      },
      MultiLineString: function (n, t) {
        for (var r = n.coordinates, e = -1, i = r.length; ++e < i; )
          if (Tt(r[e], t)) return !0;
        return !1;
      },
      Polygon: function (n, t) {
        return Ot(n.coordinates, t);
      },
      MultiPolygon: function (n, t) {
        for (var r = n.coordinates, e = -1, i = r.length; ++e < i; )
          if (Ot(r[e], t)) return !0;
        return !1;
      },
      GeometryCollection: function (n, t) {
        for (var r = n.geometries, e = -1, i = r.length; ++e < i; )
          if (zt(r[e], t)) return !0;
        return !1;
      },
    };
  function zt(n, t) {
    return !(!n || !bt.hasOwnProperty(n.type)) && bt[n.type](n, t);
  }
  function Lt(n, t) {
    return 0 === jt(n, t);
  }
  function Tt(n, t) {
    for (var r, i, o, u = 0, a = n.length; u < a; u++) {
      if (0 === (i = jt(n[u], t))) return !0;
      if (
        u > 0 &&
        (o = jt(n[u], n[u - 1])) > 0 &&
        r <= o &&
        i <= o &&
        (r + i - o) * (1 - Math.pow((r - i) / o, 2)) < e * o
      )
        return !0;
      r = i;
    }
    return !1;
  }
  function Ot(n, t) {
    return !!ft(n.map(Gt), kt(t));
  }
  function Gt(n) {
    return (n = n.map(kt)).pop(), n;
  }
  function kt(n) {
    return [n[0] * l, n[1] * l];
  }
  function Ft(n, e, i) {
    var o = t.range(n, e - r, i).concat(e);
    return function (n) {
      return o.map(function (t) {
        return [n, t];
      });
    };
  }
  function Ht(n, e, i) {
    var o = t.range(n, e - r, i).concat(e);
    return function (n) {
      return o.map(function (t) {
        return [t, n];
      });
    };
  }
  function It() {
    var n,
      e,
      i,
      o,
      u,
      a,
      c,
      l,
      p,
      s,
      h,
      v,
      d = 10,
      E = d,
      y = 90,
      S = 360,
      m = 2.5;
    function M() {
      return { type: "MultiLineString", coordinates: x() };
    }
    function x() {
      return t
        .range(g(o / y) * y, i, y)
        .map(h)
        .concat(t.range(g(l / S) * S, c, S).map(v))
        .concat(
          t
            .range(g(e / d) * d, n, d)
            .filter(function (n) {
              return f(n % y) > r;
            })
            .map(p)
        )
        .concat(
          t
            .range(g(a / E) * E, u, E)
            .filter(function (n) {
              return f(n % S) > r;
            })
            .map(s)
        );
    }
    return (
      (M.lines = function () {
        return x().map(function (n) {
          return { type: "LineString", coordinates: n };
        });
      }),
      (M.outline = function () {
        return {
          type: "Polygon",
          coordinates: [
            h(o).concat(
              v(c).slice(1),
              h(i).reverse().slice(1),
              v(l).reverse().slice(1)
            ),
          ],
        };
      }),
      (M.extent = function (n) {
        return arguments.length
          ? M.extentMajor(n).extentMinor(n)
          : M.extentMinor();
      }),
      (M.extentMajor = function (n) {
        return arguments.length
          ? ((o = +n[0][0]),
            (i = +n[1][0]),
            (l = +n[0][1]),
            (c = +n[1][1]),
            o > i && ((n = o), (o = i), (i = n)),
            l > c && ((n = l), (l = c), (c = n)),
            M.precision(m))
          : [
              [o, l],
              [i, c],
            ];
      }),
      (M.extentMinor = function (t) {
        return arguments.length
          ? ((e = +t[0][0]),
            (n = +t[1][0]),
            (a = +t[0][1]),
            (u = +t[1][1]),
            e > n && ((t = e), (e = n), (n = t)),
            a > u && ((t = a), (a = u), (u = t)),
            M.precision(m))
          : [
              [e, a],
              [n, u],
            ];
      }),
      (M.step = function (n) {
        return arguments.length ? M.stepMajor(n).stepMinor(n) : M.stepMinor();
      }),
      (M.stepMajor = function (n) {
        return arguments.length ? ((y = +n[0]), (S = +n[1]), M) : [y, S];
      }),
      (M.stepMinor = function (n) {
        return arguments.length ? ((d = +n[0]), (E = +n[1]), M) : [d, E];
      }),
      (M.precision = function (t) {
        return arguments.length
          ? ((m = +t),
            (p = Ft(a, u, 90)),
            (s = Ht(e, n, m)),
            (h = Ft(l, c, 90)),
            (v = Ht(o, i, m)),
            M)
          : m;
      }),
      M.extentMajor([
        [-180, -89.999999],
        [180, 89.999999],
      ]).extentMinor([
        [-180, -80.000001],
        [180, 80.000001],
      ])
    );
  }
  var Wt,
    Xt,
    Yt,
    Bt,
    Dt = (n) => n,
    Ut = new t.Adder(),
    Zt = new t.Adder(),
    Jt = {
      point: A,
      lineStart: A,
      lineEnd: A,
      polygonStart: function () {
        (Jt.lineStart = Kt), (Jt.lineEnd = $t);
      },
      polygonEnd: function () {
        (Jt.lineStart = Jt.lineEnd = Jt.point = A),
          Ut.add(f(Zt)),
          (Zt = new t.Adder());
      },
      result: function () {
        var n = Ut / 2;
        return (Ut = new t.Adder()), n;
      },
    };
  function Kt() {
    Jt.point = Qt;
  }
  function Qt(n, t) {
    (Jt.point = Vt), (Wt = Yt = n), (Xt = Bt = t);
  }
  function Vt(n, t) {
    Zt.add(Bt * n - Yt * t), (Yt = n), (Bt = t);
  }
  function $t() {
    Vt(Wt, Xt);
  }
  var nr = 1 / 0,
    tr = nr,
    rr = -nr,
    er = rr,
    ir = {
      point: function (n, t) {
        n < nr && (nr = n);
        n > rr && (rr = n);
        t < tr && (tr = t);
        t > er && (er = t);
      },
      lineStart: A,
      lineEnd: A,
      polygonStart: A,
      polygonEnd: A,
      result: function () {
        var n = [
          [nr, tr],
          [rr, er],
        ];
        return (rr = er = -(tr = nr = 1 / 0)), n;
      },
    };
  var or,
    ur,
    ar,
    cr,
    lr = 0,
    fr = 0,
    pr = 0,
    sr = 0,
    hr = 0,
    gr = 0,
    vr = 0,
    dr = 0,
    Er = 0,
    yr = {
      point: Sr,
      lineStart: mr,
      lineEnd: wr,
      polygonStart: function () {
        (yr.lineStart = _r), (yr.lineEnd = Nr);
      },
      polygonEnd: function () {
        (yr.point = Sr), (yr.lineStart = mr), (yr.lineEnd = wr);
      },
      result: function () {
        var n = Er
          ? [vr / Er, dr / Er]
          : gr
          ? [sr / gr, hr / gr]
          : pr
          ? [lr / pr, fr / pr]
          : [NaN, NaN];
        return (lr = fr = pr = sr = hr = gr = vr = dr = Er = 0), n;
      },
    };
  function Sr(n, t) {
    (lr += n), (fr += t), ++pr;
  }
  function mr() {
    yr.point = Mr;
  }
  function Mr(n, t) {
    (yr.point = xr), Sr((ar = n), (cr = t));
  }
  function xr(n, t) {
    var r = n - ar,
      e = t - cr,
      i = M(r * r + e * e);
    (sr += (i * (ar + n)) / 2),
      (hr += (i * (cr + t)) / 2),
      (gr += i),
      Sr((ar = n), (cr = t));
  }
  function wr() {
    yr.point = Sr;
  }
  function _r() {
    yr.point = Ar;
  }
  function Nr() {
    Rr(or, ur);
  }
  function Ar(n, t) {
    (yr.point = Rr), Sr((or = ar = n), (ur = cr = t));
  }
  function Rr(n, t) {
    var r = n - ar,
      e = t - cr,
      i = M(r * r + e * e);
    (sr += (i * (ar + n)) / 2),
      (hr += (i * (cr + t)) / 2),
      (gr += i),
      (vr += (i = cr * n - ar * t) * (ar + n)),
      (dr += i * (cr + t)),
      (Er += 3 * i),
      Sr((ar = n), (cr = t));
  }
  function Cr(n) {
    this._context = n;
  }
  Cr.prototype = {
    _radius: 4.5,
    pointRadius: function (n) {
      return (this._radius = n), this;
    },
    polygonStart: function () {
      this._line = 0;
    },
    polygonEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      0 === this._line && this._context.closePath(), (this._point = NaN);
    },
    point: function (n, t) {
      switch (this._point) {
        case 0:
          this._context.moveTo(n, t), (this._point = 1);
          break;
        case 1:
          this._context.lineTo(n, t);
          break;
        default:
          this._context.moveTo(n + this._radius, t),
            this._context.arc(n, t, this._radius, 0, a);
      }
    },
    result: A,
  };
  var Pr,
    jr,
    qr,
    br,
    zr,
    Lr = new t.Adder(),
    Tr = {
      point: A,
      lineStart: function () {
        Tr.point = Or;
      },
      lineEnd: function () {
        Pr && Gr(jr, qr), (Tr.point = A);
      },
      polygonStart: function () {
        Pr = !0;
      },
      polygonEnd: function () {
        Pr = null;
      },
      result: function () {
        var n = +Lr;
        return (Lr = new t.Adder()), n;
      },
    };
  function Or(n, t) {
    (Tr.point = Gr), (jr = br = n), (qr = zr = t);
  }
  function Gr(n, t) {
    (br -= n), (zr -= t), Lr.add(M(br * br + zr * zr)), (br = n), (zr = t);
  }
  function kr() {
    this._string = [];
  }
  function Fr(n) {
    return (
      "m0," +
      n +
      "a" +
      n +
      "," +
      n +
      " 0 1,1 0," +
      -2 * n +
      "a" +
      n +
      "," +
      n +
      " 0 1,1 0," +
      2 * n +
      "z"
    );
  }
  function Hr(n) {
    return function (t) {
      var r = new Ir();
      for (var e in n) r[e] = n[e];
      return (r.stream = t), r;
    };
  }
  function Ir() {}
  function Wr(n, t, r) {
    var e = n.clipExtent && n.clipExtent();
    return (
      n.scale(150).translate([0, 0]),
      null != e && n.clipExtent(null),
      b(r, n.stream(ir)),
      t(ir.result()),
      null != e && n.clipExtent(e),
      n
    );
  }
  function Xr(n, t, r) {
    return Wr(
      n,
      function (r) {
        var e = t[1][0] - t[0][0],
          i = t[1][1] - t[0][1],
          o = Math.min(e / (r[1][0] - r[0][0]), i / (r[1][1] - r[0][1])),
          u = +t[0][0] + (e - o * (r[1][0] + r[0][0])) / 2,
          a = +t[0][1] + (i - o * (r[1][1] + r[0][1])) / 2;
        n.scale(150 * o).translate([u, a]);
      },
      r
    );
  }
  function Yr(n, t, r) {
    return Xr(n, [[0, 0], t], r);
  }
  function Br(n, t, r) {
    return Wr(
      n,
      function (r) {
        var e = +t,
          i = e / (r[1][0] - r[0][0]),
          o = (e - i * (r[1][0] + r[0][0])) / 2,
          u = -i * r[0][1];
        n.scale(150 * i).translate([o, u]);
      },
      r
    );
  }
  function Dr(n, t, r) {
    return Wr(
      n,
      function (r) {
        var e = +t,
          i = e / (r[1][1] - r[0][1]),
          o = -i * r[0][0],
          u = (e - i * (r[1][1] + r[0][1])) / 2;
        n.scale(150 * i).translate([o, u]);
      },
      r
    );
  }
  (kr.prototype = {
    _radius: 4.5,
    _circle: Fr(4.5),
    pointRadius: function (n) {
      return (
        (n = +n) !== this._radius &&
          ((this._radius = n), (this._circle = null)),
        this
      );
    },
    polygonStart: function () {
      this._line = 0;
    },
    polygonEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      0 === this._line && this._string.push("Z"), (this._point = NaN);
    },
    point: function (n, t) {
      switch (this._point) {
        case 0:
          this._string.push("M", n, ",", t), (this._point = 1);
          break;
        case 1:
          this._string.push("L", n, ",", t);
          break;
        default:
          null == this._circle && (this._circle = Fr(this._radius)),
            this._string.push("M", n, ",", t, this._circle);
      }
    },
    result: function () {
      if (this._string.length) {
        var n = this._string.join("");
        return (this._string = []), n;
      }
      return null;
    },
  }),
    (Ir.prototype = {
      constructor: Ir,
      point: function (n, t) {
        this.stream.point(n, t);
      },
      sphere: function () {
        this.stream.sphere();
      },
      lineStart: function () {
        this.stream.lineStart();
      },
      lineEnd: function () {
        this.stream.lineEnd();
      },
      polygonStart: function () {
        this.stream.polygonStart();
      },
      polygonEnd: function () {
        this.stream.polygonEnd();
      },
    });
  var Ur = h(30 * l);
  function Zr(n, t) {
    return +t
      ? (function (n, t) {
          function e(i, o, u, a, c, l, p, h, g, v, d, E, y, S) {
            var m = p - i,
              x = h - o,
              w = m * m + x * x;
            if (w > 4 * t && y--) {
              var N = a + v,
                A = c + d,
                R = l + E,
                C = M(N * N + A * A + R * R),
                P = _((R /= C)),
                j = f(f(R) - 1) < r || f(u - g) < r ? (u + g) / 2 : s(A, N),
                q = n(j, P),
                b = q[0],
                z = q[1],
                L = b - i,
                T = z - o,
                O = x * L - m * T;
              ((O * O) / w > t ||
                f((m * L + x * T) / w - 0.5) > 0.3 ||
                a * v + c * d + l * E < Ur) &&
                (e(i, o, u, a, c, l, b, z, j, (N /= C), (A /= C), R, y, S),
                S.point(b, z),
                e(b, z, j, N, A, R, p, h, g, v, d, E, y, S));
            }
          }
          return function (t) {
            var r,
              i,
              o,
              u,
              a,
              c,
              l,
              f,
              p,
              s,
              h,
              g,
              v = {
                point: d,
                lineStart: E,
                lineEnd: S,
                polygonStart: function () {
                  t.polygonStart(), (v.lineStart = m);
                },
                polygonEnd: function () {
                  t.polygonEnd(), (v.lineStart = E);
                },
              };
            function d(r, e) {
              (r = n(r, e)), t.point(r[0], r[1]);
            }
            function E() {
              (f = NaN), (v.point = y), t.lineStart();
            }
            function y(r, i) {
              var o = en([r, i]),
                u = n(r, i);
              e(
                f,
                p,
                l,
                s,
                h,
                g,
                (f = u[0]),
                (p = u[1]),
                (l = r),
                (s = o[0]),
                (h = o[1]),
                (g = o[2]),
                16,
                t
              ),
                t.point(f, p);
            }
            function S() {
              (v.point = d), t.lineEnd();
            }
            function m() {
              E(), (v.point = M), (v.lineEnd = x);
            }
            function M(n, t) {
              y((r = n), t),
                (i = f),
                (o = p),
                (u = s),
                (a = h),
                (c = g),
                (v.point = y);
            }
            function x() {
              e(f, p, l, s, h, g, i, o, r, u, a, c, 16, t),
                (v.lineEnd = S),
                S();
            }
            return v;
          };
        })(n, t)
      : (function (n) {
          return Hr({
            point: function (t, r) {
              (t = n(t, r)), this.stream.point(t[0], t[1]);
            },
          });
        })(n);
  }
  var Jr = Hr({
    point: function (n, t) {
      this.stream.point(n * l, t * l);
    },
  });
  function Kr(n, t, r, e, i, o) {
    if (!o)
      return (function (n, t, r, e, i) {
        function o(o, u) {
          return [t + n * (o *= e), r - n * (u *= i)];
        }
        return (
          (o.invert = function (o, u) {
            return [((o - t) / n) * e, ((r - u) / n) * i];
          }),
          o
        );
      })(n, t, r, e, i);
    var u = h(o),
      a = S(o),
      c = u * n,
      l = a * n,
      f = u / n,
      p = a / n,
      s = (a * r - u * t) / n,
      g = (a * t + u * r) / n;
    function v(n, o) {
      return [c * (n *= e) - l * (o *= i) + t, r - l * n - c * o];
    }
    return (
      (v.invert = function (n, t) {
        return [e * (f * n - p * t + s), i * (g - p * n - f * t)];
      }),
      v
    );
  }
  function Qr(n) {
    return Vr(function () {
      return n;
    })();
  }
  function Vr(n) {
    var t,
      r,
      e,
      i,
      o,
      u,
      a,
      f,
      p,
      s,
      h = 150,
      g = 480,
      v = 250,
      d = 0,
      E = 0,
      y = 0,
      S = 0,
      m = 0,
      x = 0,
      w = 1,
      _ = 1,
      N = null,
      A = gt,
      R = null,
      C = Dt,
      P = 0.5;
    function j(n) {
      return f(n[0] * l, n[1] * l);
    }
    function q(n) {
      return (n = f.invert(n[0], n[1])) && [n[0] * c, n[1] * c];
    }
    function b() {
      var n = Kr(h, 0, 0, w, _, x).apply(null, t(d, E)),
        e = Kr(h, g - n[0], v - n[1], w, _, x);
      return (
        (r = Qn(y, S, m)), (a = Jn(t, e)), (f = Jn(r, a)), (u = Zr(a, P)), z()
      );
    }
    function z() {
      return (p = s = null), j;
    }
    return (
      (j.stream = function (n) {
        return p && s === n
          ? p
          : (p = Jr(
              (function (n) {
                return Hr({
                  point: function (t, r) {
                    var e = n(t, r);
                    return this.stream.point(e[0], e[1]);
                  },
                });
              })(r)(A(u(C((s = n)))))
            ));
      }),
      (j.preclip = function (n) {
        return arguments.length ? ((A = n), (N = void 0), z()) : A;
      }),
      (j.postclip = function (n) {
        return arguments.length ? ((C = n), (R = e = i = o = null), z()) : C;
      }),
      (j.clipAngle = function (n) {
        return arguments.length
          ? ((A = +n ? vt((N = n * l)) : ((N = null), gt)), z())
          : N * c;
      }),
      (j.clipExtent = function (n) {
        return arguments.length
          ? ((C =
              null == n
                ? ((R = e = i = o = null), Dt)
                : xt(
                    (R = +n[0][0]),
                    (e = +n[0][1]),
                    (i = +n[1][0]),
                    (o = +n[1][1])
                  )),
            z())
          : null == R
          ? null
          : [
              [R, e],
              [i, o],
            ];
      }),
      (j.scale = function (n) {
        return arguments.length ? ((h = +n), b()) : h;
      }),
      (j.translate = function (n) {
        return arguments.length ? ((g = +n[0]), (v = +n[1]), b()) : [g, v];
      }),
      (j.center = function (n) {
        return arguments.length
          ? ((d = (n[0] % 360) * l), (E = (n[1] % 360) * l), b())
          : [d * c, E * c];
      }),
      (j.rotate = function (n) {
        return arguments.length
          ? ((y = (n[0] % 360) * l),
            (S = (n[1] % 360) * l),
            (m = n.length > 2 ? (n[2] % 360) * l : 0),
            b())
          : [y * c, S * c, m * c];
      }),
      (j.angle = function (n) {
        return arguments.length ? ((x = (n % 360) * l), b()) : x * c;
      }),
      (j.reflectX = function (n) {
        return arguments.length ? ((w = n ? -1 : 1), b()) : w < 0;
      }),
      (j.reflectY = function (n) {
        return arguments.length ? ((_ = n ? -1 : 1), b()) : _ < 0;
      }),
      (j.precision = function (n) {
        return arguments.length ? ((u = Zr(a, (P = n * n))), z()) : M(P);
      }),
      (j.fitExtent = function (n, t) {
        return Xr(j, n, t);
      }),
      (j.fitSize = function (n, t) {
        return Yr(j, n, t);
      }),
      (j.fitWidth = function (n, t) {
        return Br(j, n, t);
      }),
      (j.fitHeight = function (n, t) {
        return Dr(j, n, t);
      }),
      function () {
        return (t = n.apply(this, arguments)), (j.invert = t.invert && q), b();
      }
    );
  }
  function $r(n) {
    var t = 0,
      r = i / 3,
      e = Vr(n),
      o = e(t, r);
    return (
      (o.parallels = function (n) {
        return arguments.length
          ? e((t = n[0] * l), (r = n[1] * l))
          : [t * c, r * c];
      }),
      o
    );
  }
  function ne(n, t) {
    var e = S(n),
      o = (e + S(t)) / 2;
    if (f(o) < r)
      return (function (n) {
        var t = h(n);
        function r(n, r) {
          return [n * t, S(r) / t];
        }
        return (
          (r.invert = function (n, r) {
            return [n / t, _(r * t)];
          }),
          r
        );
      })(n);
    var u = 1 + e * (2 * o - e),
      a = M(u) / o;
    function c(n, t) {
      var r = M(u - 2 * o * S(t)) / o;
      return [r * S((n *= o)), a - r * h(n)];
    }
    return (
      (c.invert = function (n, t) {
        var r = a - t,
          e = s(n, f(r)) * m(r);
        return (
          r * o < 0 && (e -= i * m(n) * m(r)),
          [e / o, _((u - (n * n + r * r) * o * o) / (2 * o))]
        );
      }),
      c
    );
  }
  function te() {
    return $r(ne).scale(155.424).center([0, 33.6442]);
  }
  function re() {
    return te()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
  }
  function ee(n) {
    return function (t, r) {
      var e = h(t),
        i = h(r),
        o = n(e * i);
      return o === 1 / 0 ? [2, 0] : [o * i * S(t), o * S(r)];
    };
  }
  function ie(n) {
    return function (t, r) {
      var e = M(t * t + r * r),
        i = n(e),
        o = S(i),
        u = h(i);
      return [s(t * o, e * u), _(e && (r * o) / e)];
    };
  }
  var oe = ee(function (n) {
    return M(2 / (1 + n));
  });
  oe.invert = ie(function (n) {
    return 2 * _(n / 2);
  });
  var ue = ee(function (n) {
    return (n = w(n)) && n / S(n);
  });
  function ae(n, t) {
    return [n, E(x((o + t) / 2))];
  }
  function ce(n) {
    var t,
      r,
      e,
      o = Qr(n),
      u = o.center,
      a = o.scale,
      c = o.translate,
      l = o.clipExtent,
      f = null;
    function p() {
      var u = i * a(),
        c = o(tt(o.rotate()).invert([0, 0]));
      return l(
        null == f
          ? [
              [c[0] - u, c[1] - u],
              [c[0] + u, c[1] + u],
            ]
          : n === ae
          ? [
              [Math.max(c[0] - u, f), t],
              [Math.min(c[0] + u, r), e],
            ]
          : [
              [f, Math.max(c[1] - u, t)],
              [r, Math.min(c[1] + u, e)],
            ]
      );
    }
    return (
      (o.scale = function (n) {
        return arguments.length ? (a(n), p()) : a();
      }),
      (o.translate = function (n) {
        return arguments.length ? (c(n), p()) : c();
      }),
      (o.center = function (n) {
        return arguments.length ? (u(n), p()) : u();
      }),
      (o.clipExtent = function (n) {
        return arguments.length
          ? (null == n
              ? (f = t = r = e = null)
              : ((f = +n[0][0]),
                (t = +n[0][1]),
                (r = +n[1][0]),
                (e = +n[1][1])),
            p())
          : null == f
          ? null
          : [
              [f, t],
              [r, e],
            ];
      }),
      p()
    );
  }
  function le(n) {
    return x((o + n) / 2);
  }
  function fe(n, t) {
    var e = h(n),
      u = n === t ? S(n) : E(e / h(t)) / E(le(t) / le(n)),
      a = (e * y(le(n), u)) / u;
    if (!u) return ae;
    function c(n, t) {
      a > 0 ? t < -o + r && (t = -o + r) : t > o - r && (t = o - r);
      var e = a / y(le(t), u);
      return [e * S(u * n), a - e * h(u * n)];
    }
    return (
      (c.invert = function (n, t) {
        var r = a - t,
          e = m(u) * M(n * n + r * r),
          c = s(n, f(r)) * m(r);
        return (
          r * u < 0 && (c -= i * m(n) * m(r)),
          [c / u, 2 * p(y(a / e, 1 / u)) - o]
        );
      }),
      c
    );
  }
  function pe(n, t) {
    return [n, t];
  }
  function se(n, t) {
    var e = h(n),
      o = n === t ? S(n) : (e - h(t)) / (t - n),
      u = e / o + n;
    if (f(o) < r) return pe;
    function a(n, t) {
      var r = u - t,
        e = o * n;
      return [r * S(e), u - r * h(e)];
    }
    return (
      (a.invert = function (n, t) {
        var r = u - t,
          e = s(n, f(r)) * m(r);
        return (
          r * o < 0 && (e -= i * m(n) * m(r)),
          [e / o, u - m(o) * M(n * n + r * r)]
        );
      }),
      a
    );
  }
  (ue.invert = ie(function (n) {
    return n;
  })),
    (ae.invert = function (n, t) {
      return [n, 2 * p(v(t)) - o];
    }),
    (pe.invert = pe);
  var he = 1.340264,
    ge = -0.081106,
    ve = 893e-6,
    de = 0.003796,
    Ee = M(3) / 2;
  function ye(n, t) {
    var r = _(Ee * S(t)),
      e = r * r,
      i = e * e * e;
    return [
      (n * h(r)) / (Ee * (he + 3 * ge * e + i * (7 * ve + 9 * de * e))),
      r * (he + ge * e + i * (ve + de * e)),
    ];
  }
  function Se(n, t) {
    var r = h(t),
      e = h(n) * r;
    return [(r * S(n)) / e, S(t) / e];
  }
  function me(n, t) {
    var r = t * t,
      e = r * r;
    return [
      n *
        (0.8707 -
          0.131979 * r +
          e * (e * (0.003971 * r - 0.001529 * e) - 0.013791)),
      t *
        (1.007226 +
          r * (0.015085 + e * (0.028874 * r - 0.044475 - 0.005916 * e))),
    ];
  }
  function Me(n, t) {
    return [h(t) * S(n), S(t)];
  }
  function xe(n, t) {
    var r = h(t),
      e = 1 + h(n) * r;
    return [(r * S(n)) / e, S(t) / e];
  }
  function we(n, t) {
    return [E(x((o + t) / 2)), -n];
  }
  (ye.invert = function (n, t) {
    for (
      var r, i = t, o = i * i, u = o * o * o, a = 0;
      a < 12 &&
      ((u =
        (o =
          (i -= r =
            (i * (he + ge * o + u * (ve + de * o)) - t) /
            (he + 3 * ge * o + u * (7 * ve + 9 * de * o))) * i) *
        o *
        o),
      !(f(r) < e));
      ++a
    );
    return [
      (Ee * n * (he + 3 * ge * o + u * (7 * ve + 9 * de * o))) / h(i),
      _(S(i) / Ee),
    ];
  }),
    (Se.invert = ie(p)),
    (me.invert = function (n, t) {
      var e,
        i = t,
        o = 25;
      do {
        var u = i * i,
          a = u * u;
        i -= e =
          (i *
            (1.007226 +
              u * (0.015085 + a * (0.028874 * u - 0.044475 - 0.005916 * a))) -
            t) /
          (1.007226 +
            u * (0.045255 + a * (0.259866 * u - 0.311325 - 0.005916 * 11 * a)));
      } while (f(e) > r && --o > 0);
      return [
        n /
          (0.8707 +
            (u = i * i) *
              (u * (u * u * u * (0.003971 - 0.001529 * u) - 0.013791) -
                0.131979)),
        i,
      ];
    }),
    (Me.invert = ie(_)),
    (xe.invert = ie(function (n) {
      return 2 * p(n);
    })),
    (we.invert = function (n, t) {
      return [-t, 2 * p(v(n)) - o];
    }),
    (n.geoAlbers = re),
    (n.geoAlbersUsa = function () {
      var n,
        t,
        e,
        i,
        o,
        u,
        a = re(),
        c = te().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        l = te().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        f = {
          point: function (n, t) {
            u = [n, t];
          },
        };
      function p(n) {
        var t = n[0],
          r = n[1];
        return (
          (u = null),
          e.point(t, r),
          u || (i.point(t, r), u) || (o.point(t, r), u)
        );
      }
      function s() {
        return (n = t = null), p;
      }
      return (
        (p.invert = function (n) {
          var t = a.scale(),
            r = a.translate(),
            e = (n[0] - r[0]) / t,
            i = (n[1] - r[1]) / t;
          return (
            i >= 0.12 && i < 0.234 && e >= -0.425 && e < -0.214
              ? c
              : i >= 0.166 && i < 0.234 && e >= -0.214 && e < -0.115
              ? l
              : a
          ).invert(n);
        }),
        (p.stream = function (r) {
          return n && t === r
            ? n
            : ((e = [a.stream((t = r)), c.stream(r), l.stream(r)]),
              (i = e.length),
              (n = {
                point: function (n, t) {
                  for (var r = -1; ++r < i; ) e[r].point(n, t);
                },
                sphere: function () {
                  for (var n = -1; ++n < i; ) e[n].sphere();
                },
                lineStart: function () {
                  for (var n = -1; ++n < i; ) e[n].lineStart();
                },
                lineEnd: function () {
                  for (var n = -1; ++n < i; ) e[n].lineEnd();
                },
                polygonStart: function () {
                  for (var n = -1; ++n < i; ) e[n].polygonStart();
                },
                polygonEnd: function () {
                  for (var n = -1; ++n < i; ) e[n].polygonEnd();
                },
              }));
          var e, i;
        }),
        (p.precision = function (n) {
          return arguments.length
            ? (a.precision(n), c.precision(n), l.precision(n), s())
            : a.precision();
        }),
        (p.scale = function (n) {
          return arguments.length
            ? (a.scale(n),
              c.scale(0.35 * n),
              l.scale(n),
              p.translate(a.translate()))
            : a.scale();
        }),
        (p.translate = function (n) {
          if (!arguments.length) return a.translate();
          var t = a.scale(),
            u = +n[0],
            p = +n[1];
          return (
            (e = a
              .translate(n)
              .clipExtent([
                [u - 0.455 * t, p - 0.238 * t],
                [u + 0.455 * t, p + 0.238 * t],
              ])
              .stream(f)),
            (i = c
              .translate([u - 0.307 * t, p + 0.201 * t])
              .clipExtent([
                [u - 0.425 * t + r, p + 0.12 * t + r],
                [u - 0.214 * t - r, p + 0.234 * t - r],
              ])
              .stream(f)),
            (o = l
              .translate([u - 0.205 * t, p + 0.212 * t])
              .clipExtent([
                [u - 0.214 * t + r, p + 0.166 * t + r],
                [u - 0.115 * t - r, p + 0.234 * t - r],
              ])
              .stream(f)),
            s()
          );
        }),
        (p.fitExtent = function (n, t) {
          return Xr(p, n, t);
        }),
        (p.fitSize = function (n, t) {
          return Yr(p, n, t);
        }),
        (p.fitWidth = function (n, t) {
          return Br(p, n, t);
        }),
        (p.fitHeight = function (n, t) {
          return Dr(p, n, t);
        }),
        p.scale(1070)
      );
    }),
    (n.geoArea = function (n) {
      return (K = new t.Adder()), b(n, Q), 2 * K;
    }),
    (n.geoAzimuthalEqualArea = function () {
      return Qr(oe).scale(124.75).clipAngle(179.999);
    }),
    (n.geoAzimuthalEqualAreaRaw = oe),
    (n.geoAzimuthalEquidistant = function () {
      return Qr(ue).scale(79.4188).clipAngle(179.999);
    }),
    (n.geoAzimuthalEquidistantRaw = ue),
    (n.geoBounds = function (n) {
      var t, r, e, i, o, u, a;
      if (((I = H = -(k = F = 1 / 0)), (U = []), b(n, An), (r = U.length))) {
        for (U.sort(Tn), t = 1, o = [(e = U[0])]; t < r; ++t)
          On(e, (i = U[t])[0]) || On(e, i[1])
            ? (Ln(e[0], i[1]) > Ln(e[0], e[1]) && (e[1] = i[1]),
              Ln(i[0], e[1]) > Ln(e[0], e[1]) && (e[0] = i[0]))
            : o.push((e = i));
        for (u = -1 / 0, t = 0, e = o[(r = o.length - 1)]; t <= r; e = i, ++t)
          (i = o[t]),
            (a = Ln(e[1], i[0])) > u && ((u = a), (k = i[0]), (H = e[1]));
      }
      return (
        (U = Z = null),
        k === 1 / 0 || F === 1 / 0
          ? [
              [NaN, NaN],
              [NaN, NaN],
            ]
          : [
              [k, F],
              [H, I],
            ]
      );
    }),
    (n.geoCentroid = function (n) {
      (fn = pn = sn = hn = gn = vn = dn = En = 0),
        (yn = new t.Adder()),
        (Sn = new t.Adder()),
        (mn = new t.Adder()),
        b(n, Gn);
      var i = +yn,
        o = +Sn,
        u = +mn,
        a = d(i, o, u);
      return a < e &&
        ((i = vn),
        (o = dn),
        (u = En),
        pn < r && ((i = sn), (o = hn), (u = gn)),
        (a = d(i, o, u)) < e)
        ? [NaN, NaN]
        : [s(o, i) * c, _(u / a) * c];
    }),
    (n.geoCircle = function () {
      var n,
        t,
        r = Zn([0, 0]),
        e = Zn(90),
        i = Zn(6),
        o = {
          point: function (r, e) {
            n.push((r = t(r, e))), (r[0] *= c), (r[1] *= c);
          },
        };
      function u() {
        var u = r.apply(this, arguments),
          a = e.apply(this, arguments) * l,
          c = i.apply(this, arguments) * l;
        return (
          (n = []),
          (t = Qn(-u[0] * l, -u[1] * l, 0).invert),
          rt(o, a, c, 1),
          (u = { type: "Polygon", coordinates: [n] }),
          (n = t = null),
          u
        );
      }
      return (
        (u.center = function (n) {
          return arguments.length
            ? ((r = "function" == typeof n ? n : Zn([+n[0], +n[1]])), u)
            : r;
        }),
        (u.radius = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Zn(+n)), u)
            : e;
        }),
        (u.precision = function (n) {
          return arguments.length
            ? ((i = "function" == typeof n ? n : Zn(+n)), u)
            : i;
        }),
        u
      );
    }),
    (n.geoClipAntimeridian = gt),
    (n.geoClipCircle = vt),
    (n.geoClipExtent = function () {
      var n,
        t,
        r,
        e = 0,
        i = 0,
        o = 960,
        u = 500;
      return (r = {
        stream: function (r) {
          return n && t === r ? n : (n = xt(e, i, o, u)((t = r)));
        },
        extent: function (a) {
          return arguments.length
            ? ((e = +a[0][0]),
              (i = +a[0][1]),
              (o = +a[1][0]),
              (u = +a[1][1]),
              (n = t = null),
              r)
            : [
                [e, i],
                [o, u],
              ];
        },
      });
    }),
    (n.geoClipRectangle = xt),
    (n.geoConicConformal = function () {
      return $r(fe).scale(109.5).parallels([30, 30]);
    }),
    (n.geoConicConformalRaw = fe),
    (n.geoConicEqualArea = te),
    (n.geoConicEqualAreaRaw = ne),
    (n.geoConicEquidistant = function () {
      return $r(se).scale(131.154).center([0, 13.9389]);
    }),
    (n.geoConicEquidistantRaw = se),
    (n.geoContains = function (n, t) {
      return (n && qt.hasOwnProperty(n.type) ? qt[n.type] : zt)(n, t);
    }),
    (n.geoDistance = jt),
    (n.geoEqualEarth = function () {
      return Qr(ye).scale(177.158);
    }),
    (n.geoEqualEarthRaw = ye),
    (n.geoEquirectangular = function () {
      return Qr(pe).scale(152.63);
    }),
    (n.geoEquirectangularRaw = pe),
    (n.geoGnomonic = function () {
      return Qr(Se).scale(144.049).clipAngle(60);
    }),
    (n.geoGnomonicRaw = Se),
    (n.geoGraticule = It),
    (n.geoGraticule10 = function () {
      return It()();
    }),
    (n.geoIdentity = function () {
      var n,
        t,
        r,
        e,
        i,
        o,
        u,
        a = 1,
        f = 0,
        p = 0,
        s = 1,
        g = 1,
        v = 0,
        d = null,
        E = 1,
        y = 1,
        m = Hr({
          point: function (n, t) {
            var r = w([n, t]);
            this.stream.point(r[0], r[1]);
          },
        }),
        M = Dt;
      function x() {
        return (E = a * s), (y = a * g), (o = u = null), w;
      }
      function w(r) {
        var e = r[0] * E,
          i = r[1] * y;
        if (v) {
          var o = i * n - e * t;
          (e = e * n + i * t), (i = o);
        }
        return [e + f, i + p];
      }
      return (
        (w.invert = function (r) {
          var e = r[0] - f,
            i = r[1] - p;
          if (v) {
            var o = i * n + e * t;
            (e = e * n - i * t), (i = o);
          }
          return [e / E, i / y];
        }),
        (w.stream = function (n) {
          return o && u === n ? o : (o = m(M((u = n))));
        }),
        (w.postclip = function (n) {
          return arguments.length ? ((M = n), (d = r = e = i = null), x()) : M;
        }),
        (w.clipExtent = function (n) {
          return arguments.length
            ? ((M =
                null == n
                  ? ((d = r = e = i = null), Dt)
                  : xt(
                      (d = +n[0][0]),
                      (r = +n[0][1]),
                      (e = +n[1][0]),
                      (i = +n[1][1])
                    )),
              x())
            : null == d
            ? null
            : [
                [d, r],
                [e, i],
              ];
        }),
        (w.scale = function (n) {
          return arguments.length ? ((a = +n), x()) : a;
        }),
        (w.translate = function (n) {
          return arguments.length ? ((f = +n[0]), (p = +n[1]), x()) : [f, p];
        }),
        (w.angle = function (r) {
          return arguments.length
            ? ((t = S((v = (r % 360) * l))), (n = h(v)), x())
            : v * c;
        }),
        (w.reflectX = function (n) {
          return arguments.length ? ((s = n ? -1 : 1), x()) : s < 0;
        }),
        (w.reflectY = function (n) {
          return arguments.length ? ((g = n ? -1 : 1), x()) : g < 0;
        }),
        (w.fitExtent = function (n, t) {
          return Xr(w, n, t);
        }),
        (w.fitSize = function (n, t) {
          return Yr(w, n, t);
        }),
        (w.fitWidth = function (n, t) {
          return Br(w, n, t);
        }),
        (w.fitHeight = function (n, t) {
          return Dr(w, n, t);
        }),
        w
      );
    }),
    (n.geoInterpolate = function (n, t) {
      var r = n[0] * l,
        e = n[1] * l,
        i = t[0] * l,
        o = t[1] * l,
        u = h(e),
        a = S(e),
        f = h(o),
        p = S(o),
        g = u * h(r),
        v = u * S(r),
        d = f * h(i),
        E = f * S(i),
        y = 2 * _(M(N(o - e) + u * f * N(i - r))),
        m = S(y),
        x = y
          ? function (n) {
              var t = S((n *= y)) / m,
                r = S(y - n) / m,
                e = r * g + t * d,
                i = r * v + t * E,
                o = r * a + t * p;
              return [s(i, e) * c, s(o, M(e * e + i * i)) * c];
            }
          : function () {
              return [r * c, e * c];
            };
      return (x.distance = y), x;
    }),
    (n.geoLength = Rt),
    (n.geoMercator = function () {
      return ce(ae).scale(961 / a);
    }),
    (n.geoMercatorRaw = ae),
    (n.geoNaturalEarth1 = function () {
      return Qr(me).scale(175.295);
    }),
    (n.geoNaturalEarth1Raw = me),
    (n.geoOrthographic = function () {
      return Qr(Me).scale(249.5).clipAngle(90.000001);
    }),
    (n.geoOrthographicRaw = Me),
    (n.geoPath = function (n, t) {
      var r,
        e,
        i = 4.5;
      function o(n) {
        return (
          n &&
            ("function" == typeof i && e.pointRadius(+i.apply(this, arguments)),
            b(n, r(e))),
          e.result()
        );
      }
      return (
        (o.area = function (n) {
          return b(n, r(Jt)), Jt.result();
        }),
        (o.measure = function (n) {
          return b(n, r(Tr)), Tr.result();
        }),
        (o.bounds = function (n) {
          return b(n, r(ir)), ir.result();
        }),
        (o.centroid = function (n) {
          return b(n, r(yr)), yr.result();
        }),
        (o.projection = function (t) {
          return arguments.length
            ? ((r = null == t ? ((n = null), Dt) : (n = t).stream), o)
            : n;
        }),
        (o.context = function (n) {
          return arguments.length
            ? ((e = null == n ? ((t = null), new kr()) : new Cr((t = n))),
              "function" != typeof i && e.pointRadius(i),
              o)
            : t;
        }),
        (o.pointRadius = function (n) {
          return arguments.length
            ? ((i = "function" == typeof n ? n : (e.pointRadius(+n), +n)), o)
            : i;
        }),
        o.projection(n).context(t)
      );
    }),
    (n.geoProjection = Qr),
    (n.geoProjectionMutator = Vr),
    (n.geoRotation = tt),
    (n.geoStereographic = function () {
      return Qr(xe).scale(250).clipAngle(142);
    }),
    (n.geoStereographicRaw = xe),
    (n.geoStream = b),
    (n.geoTransform = function (n) {
      return { stream: Hr(n) };
    }),
    (n.geoTransverseMercator = function () {
      var n = ce(we),
        t = n.center,
        r = n.rotate;
      return (
        (n.center = function (n) {
          return arguments.length ? t([-n[1], n[0]]) : [(n = t())[1], -n[0]];
        }),
        (n.rotate = function (n) {
          return arguments.length
            ? r([n[0], n[1], n.length > 2 ? n[2] + 90 : 90])
            : [(n = r())[0], n[1], n[2] - 90];
        }),
        r([0, 0, 90]).scale(159.155)
      );
    }),
    (n.geoTransverseMercatorRaw = we),
    Object.defineProperty(n, "__esModule", { value: !0 });
});
