/*
 HaxBall @ 2023 - Mario Carbajal - All rights reserved.
 f5f95965
*/
'use strict';
(function(pa) {
    function ja() {
        return w.Me(this, "")
    }

    function fc(a) {
        return 66 > a ? 66 : 400 < a ? 400 : a
    }

    function M(a, b) {
        if (null == b) return null;
        null == b.rh && (b.rh = pa.Ej++);
        var c;
        null == a.pj ? a.pj = {} : c = a.pj[b.rh];
        null == c && (c = b.bind(a), a.pj[b.rh] = c);
        return c
    }
    class x {
        static Aa(a) {
            let b = new Map,
                c = 0;
            for (a = a.querySelectorAll("[data-hook]"); c < a.length;) {
                let d = a[c++];
                b.set(d.getAttribute("data-hook"), d)
            }
            return b
        }
        static Ha(a, b) {
            null == b && (b = "div");
            b = window.document.createElement(b);
            b.innerHTML = a;
            return b.firstElementChild
        }
        static replaceWith(a,
            b) {
            a.parentElement.replaceChild(b, a)
        }
        static Nf(a) {
            let b = a.firstChild;
            for (; null != b;) a.removeChild(b), b = a.firstChild
        }
    }
    class D {
        static i(a, b) {
            null != a && a(b)
        }
    }
    class gb {
        constructor(a) {
            this.ml = a.get("notice");
            this.vo = a.get("notice-contents");
            this.wd = a.get("notice-close");
            this.bm()
        }
        bm() {
            let a = this;
            Y.Kk(m.Pe + "api/notice").then(function(b) {
                let c = b.content;
                null != c && "" != c && gb.jo != c && (a.vo.innerHTML = c, a.ml.hidden = !1, a.wd.onclick = function() {
                    gb.jo = c;
                    return a.ml.hidden = !0
                })
            })
        }
    }
    class Q {
        static Fe(a) {
            return w.Me(a, "")
        }
        static parseInt(a) {
            a =
                parseInt(a);
            return isNaN(a) ? null : a
        }
    }
    class gc {
        constructor(a, b) {
            this.pn = 0;
            this.version = 1;
            this.kh = 0;
            this.Vd = A.ia(1E3);
            this.Of = A.ia(16384);
            this.version = b;
            let c = this.kh = a.$;
            this.sj = a;
            a.U.fa(this.Of);
            let d = this;
            a.hc = function(f) {
                let g = a.$;
                d.Of.mb(g - c);
                c = g;
                d.Of.Wb(f.R);
                p.vj(f, d.Of)
            };
            this.Vd.Wb(0);
            let e = this.kh;
            a.U.Cm(function(f) {
                let g = a.$;
                d.Vd.mb(g - e);
                d.Vd.m(f);
                d.pn++;
                e = g
            })
        }
        stop() {
            this.sj.hc = null;
            this.sj.U.Cm(null);
            this.Vd.s.setUint16(0, this.pn, this.Vd.Ta);
            this.Vd.Xb(this.Of.Vb());
            let a = pako.deflateRaw(this.Vd.Vb()),
                b = A.ia(a.byteLength + 32);
            b.Xg("HBR2");
            b.ub(this.version);
            b.ub(this.sj.$ - this.kh);
            b.Xb(a);
            return b.Vb()
        }
    }
    class zc {
        static gn() {
            try {
                let a = window.localStorage;
                a.getItem("");
                if (0 == a.length) {
                    let b = "_hx_" + Math.random();
                    a.setItem(b, b);
                    a.removeItem(b)
                }
                return a
            } catch (a) {
                return null
            }
        }
    }
    class Aa {
        static i(a, b, c) {
            null != a && a(b, c)
        }
    }
    class Gc {
        static uf(a) {
            a = a.split(" ");
            let b = a[4];
            if ("typ" != a[6]) throw v.C(null);
            return {
                ps: a[7],
                sp: b
            }
        }
    }
    class hb {
        constructor(a) {
            this.f = x.Ha(hb.O);
            x.Aa(this.f).get("features").textContent = a.join(", ")
        }
    }
    class ib {
        static fi(a) {
            return new PerfectScrollbar(a, {
                handlers: ib.op
            })
        }
    }
    class A {
        constructor(a, b) {
            null == b && (b = !1);
            this.s = a;
            this.Ta = b;
            this.a = 0
        }
        Sg() {
            let a = new ArrayBuffer(this.a),
                b = new Uint8Array(this.s.buffer, this.s.byteOffset, this.a);
            (new Uint8Array(a)).set(b);
            return a
        }
        Vb() {
            return new Uint8Array(this.s.buffer, this.s.byteOffset, this.a)
        }
        Qd() {
            return new DataView(this.s.buffer, this.s.byteOffset, this.a)
        }
        ks() {
            return new J(this.Qd(), this.Ta)
        }
        tc(a) {
            this.s.byteLength < a && this.yr(2 * this.s.byteLength >= a ? 2 * this.s.byteLength :
                a)
        }
        yr(a) {
            if (1 > a) throw v.C("Can't resize buffer to a capacity lower than 1");
            if (this.s.byteLength < a) {
                let b = new Uint8Array(this.s.buffer);
                a = new ArrayBuffer(a);
                (new Uint8Array(a)).set(b);
                this.s = new DataView(a)
            }
        }
        m(a) {
            let b = this.a++;
            this.tc(this.a);
            this.s.setUint8(b, a)
        }
        hj(a) {
            let b = this.a;
            this.a += 2;
            this.tc(this.a);
            this.s.setInt16(b, a, this.Ta)
        }
        Wb(a) {
            let b = this.a;
            this.a += 2;
            this.tc(this.a);
            this.s.setUint16(b, a, this.Ta)
        }
        P(a) {
            let b = this.a;
            this.a += 4;
            this.tc(this.a);
            this.s.setInt32(b, a, this.Ta)
        }
        ub(a) {
            let b = this.a;
            this.a += 4;
            this.tc(this.a);
            this.s.setUint32(b, a, this.Ta)
        }
        gj(a) {
            let b = this.a;
            this.a += 4;
            this.tc(this.a);
            this.s.setFloat32(b, a, this.Ta)
        }
        u(a) {
            let b = this.a;
            this.a += 8;
            this.tc(this.a);
            this.s.setFloat64(b, a, this.Ta)
        }
        Xb(a) {
            let b = this.a;
            this.a += a.byteLength;
            this.tc(this.a);
            (new Uint8Array(this.s.buffer, this.s.byteOffset, this.s.byteLength)).set(a, b)
        }
        Vg(a) {
            this.Xb(new Uint8Array(a))
        }
        oc(a) {
            this.mb(A.Xf(a));
            this.Xg(a)
        }
        Fb(a) {
            null == a ? this.mb(0) : (this.mb(A.Xf(a) + 1), this.Xg(a))
        }
        an(a) {
            let b = A.Xf(a);
            if (255 < b) throw v.C(null);
            this.m(b);
            this.Xg(a)
        }
        Wg(a) {
            this.oc(JSON.stringify(a))
        }
        Xg(a) {
            let b = this.a;
            this.tc(b + A.Xf(a));
            let c = a.length,
                d = 0;
            for (; d < c;) b += A.Oo(O.mj(a, d++), this.s, b);
            this.a = b
        }
        mb(a) {
            let b = this.a;
            a >>>= 0;
            this.tc(b + A.Zn(a));
            this.s.setUint8(b, a | 128);
            128 <= a ? (this.s.setUint8(b + 1, a >> 7 | 128), 16384 <= a ? (this.s.setUint8(b + 2, a >> 14 | 128), 2097152 <= a ? (this.s.setUint8(b + 3, a >> 21 | 128), 268435456 <= a ? (this.s.setUint8(b + 4, a >> 28 & 127), a = 5) : (this.s.setUint8(b + 3, this.s.getUint8(b + 3) & 127), a = 4)) : (this.s.setUint8(b + 2, this.s.getUint8(b + 2) & 127),
                a = 3)) : (this.s.setUint8(b + 1, this.s.getUint8(b + 1) & 127), a = 2)) : (this.s.setUint8(b, this.s.getUint8(b) & 127), a = 1);
            this.a += a
        }
        static ia(a, b) {
            null == b && (b = !1);
            null == a && (a = 16);
            return new A(new DataView(new ArrayBuffer(a)), b)
        }
        static Oo(a, b, c) {
            let d = c;
            if (0 > a) throw v.C("Cannot encode UTF8 character: charCode (" + a + ") is negative");
            if (128 > a) b.setUint8(c, a & 127), ++c;
            else if (2048 > a) b.setUint8(c, a >> 6 & 31 | 192), b.setUint8(c + 1, a & 63 | 128), c += 2;
            else if (65536 > a) b.setUint8(c, a >> 12 & 15 | 224), b.setUint8(c + 1, a >> 6 & 63 | 128), b.setUint8(c +
                2, a & 63 | 128), c += 3;
            else if (2097152 > a) b.setUint8(c, a >> 18 & 7 | 240), b.setUint8(c + 1, a >> 12 & 63 | 128), b.setUint8(c + 2, a >> 6 & 63 | 128), b.setUint8(c + 3, a & 63 | 128), c += 4;
            else if (67108864 > a) b.setUint8(c, a >> 24 & 3 | 248), b.setUint8(c + 1, a >> 18 & 63 | 128), b.setUint8(c + 2, a >> 12 & 63 | 128), b.setUint8(c + 3, a >> 6 & 63 | 128), b.setUint8(c + 4, a & 63 | 128), c += 5;
            else if (-2147483648 > a) b.setUint8(c, a >> 30 & 1 | 252), b.setUint8(c + 1, a >> 24 & 63 | 128), b.setUint8(c + 2, a >> 18 & 63 | 128), b.setUint8(c + 3, a >> 12 & 63 | 128), b.setUint8(c + 4, a >> 6 & 63 | 128), b.setUint8(c + 5, a & 63 | 128), c += 6;
            else throw v.C("Cannot encode UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
            return c - d
        }
        static Yn(a) {
            if (0 > a) throw v.C("Cannot calculate length of UTF8 character: charCode (" + a + ") is negative");
            if (128 > a) return 1;
            if (2048 > a) return 2;
            if (65536 > a) return 3;
            if (2097152 > a) return 4;
            if (67108864 > a) return 5;
            if (-2147483648 > a) return 6;
            throw v.C("Cannot calculate length of UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
        }
        static Xf(a) {
            let b = 0,
                c = a.length,
                d = 0;
            for (; d < c;) b += A.Yn(O.mj(a,
                d++));
            return b
        }
        static Zn(a) {
            a >>>= 0;
            return 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5
        }
    }
    class Nb {
        static i(a, b, c, d, e) {
            null != a && a(b, c, d, e)
        }
    }
    class jb {
        constructor(a) {
            this.D = a.D;
            this.Ab = a.Ab;
            this.aa = a.X;
            this.f = x.Ha(jb.O);
            let b = x.Aa(this.f);
            this.lf = b.get("name");
            this.Dg = b.get("ping");
            try {
                b.get("flag").classList.add("f-" + a.country)
            } catch (d) {}
            this.lf.textContent = this.D;
            this.Dg.textContent = "" + this.Ab;
            let c = this;
            this.f.ondragstart = function(d) {
                d.dataTransfer.setData("player", Q.Fe(c.aa))
            };
            this.f.oncontextmenu =
                function(d) {
                    d.preventDefault();
                    D.i(c.tf, c.aa)
                };
            this.xm(a.eb)
        }
        B(a, b) {
            this.f.draggable = b;
            this.Ab != a.Ab && (this.Ab = a.Ab, this.Dg.textContent = "" + this.Ab);
            this.Mn != a.eb && this.xm(a.eb)
        }
        xm(a) {
            this.Mn = a;
            this.f.className = "player-list-item" + (a ? " admin" : "")
        }
    }
    class kb {
        constructor() {
            this.kb = null;
            this.f = x.Ha(kb.O);
            let a = x.Aa(this.f),
                b = this;
            a.get("cancel").onclick = function() {
                H.i(b.ki)
            };
            this.pi = a.get("pick");
            this.tk = a.get("delete");
            this.Ik = a.get("export");
            let c = a.get("list"),
                d = a.get("file");
            this.Ug();
            this.pi.onclick =
                function() {
                    null != b.kb && b.kb.Xd().then(function(e) {
                        D.i(b.Ag, e)
                    })
                };
            this.tk.onclick = function() {
                if (null != b.kb) {
                    var e = b.kb.cn;
                    null != e && (b.kb.Ja.remove(), b.kb = null, e(), b.Ug())
                }
            };
            this.Ik.onclick = function() {
                null != b.kb && b.kb.Xd().then(function(e) {
                    Ob.Cr(e.Ae(), e.D + ".hbs")
                })
            };
            this.ti(c);
            this.Vl = ib.fi(c);
            window.setTimeout(function() {
                b.Vl.update()
            }, 0);
            d.onchange = function() {
                var e = d.files;
                if (!(1 > e.length)) {
                    e = e.item(0);
                    var f = new FileReader;
                    f.onload = function() {
                        try {
                            var g = f.result;
                            let h = new q;
                            h.al(g);
                            D.i(b.Ag, h)
                        } catch (h) {
                            g =
                                v.Lb(h).Gb(), g instanceof SyntaxError ? D.i(b.ni, "SyntaxError in line: " + Q.Fe(g.lineNumber)) : g instanceof Ra ? D.i(b.ni, g.Up) : D.i(b.ni, "Error loading stadium file.")
                        }
                    };
                    f.readAsText(e)
                }
            }
        }
        Ug() {
            this.pi.disabled = null == this.kb;
            this.tk.disabled = null == this.kb || null == this.kb.cn;
            this.Ik.disabled = null == this.kb
        }
        hl(a, b, c) {
            let d = window.document.createElement("div");
            d.textContent = a;
            d.className = "elem";
            null != c && d.classList.add("custom");
            let e = {
                    Ja: d,
                    Xd: b,
                    cn: c
                },
                f = this;
            d.onclick = function() {
                null != f.kb && f.kb.Ja.classList.remove("selected");
                f.kb = e;
                d.classList.add("selected");
                f.Ug()
            };
            d.ondblclick = function() {
                f.kb = e;
                f.Ug();
                return f.pi.onclick()
            };
            return d
        }
        ti(a) {
            let b = q.Oh(),
                c = 0;
            for (; c < b.length;) {
                let e = b[c];
                ++c;
                a.appendChild(this.hl(e.D, function() {
                    return Promise.resolve(e)
                }, null))
            }
            let d = this;
            lb.getAll().then(function(e) {
                let f = 0;
                for (; f < e.length;) {
                    let g = e[f];
                    ++f;
                    let h = g.id;
                    a.appendChild(d.hl(g.name, function() {
                        return lb.get(h)
                    }, function() {
                        return lb.delete(h)
                    }))
                }
                d.Vl.update()
            })
        }
    }
    class Hc {
        static qj() {
            p.Ia(mb);
            p.Ia(Ba);
            p.Ia(Sa);
            p.Ia(Ca);
            p.Ia(Ta);
            p.Ia(Da);
            p.Ia(ka);
            p.Ia(Ua);
            p.Ia(Va);
            p.Ia(Wa);
            p.Ia(qa);
            p.Ia(Ea);
            p.Ia(fa);
            p.Ia(Fa);
            p.Ia(Ga);
            p.Ia(Xa);
            p.Ia(Ha);
            p.Ia(Ia);
            p.Ia(Ja);
            p.Ia(Ya);
            p.Ia(nb);
            p.Ia(Ka);
            p.Ia(ob);
            p.Ia(pb)
        }
    }
    class ra {
        constructor() {
            this.h = this.w = 63;
            this.S = 16777215;
            this.Da = .99;
            this.ba = 1;
            this.o = .5;
            this.V = 10;
            this.pa = new P(0, 0);
            this.G = new P(0, 0);
            this.a = new P(0, 0)
        }
        fa(a) {
            var b = this.a;
            a.u(b.x);
            a.u(b.y);
            b = this.G;
            a.u(b.x);
            a.u(b.y);
            b = this.pa;
            a.u(b.x);
            a.u(b.y);
            a.u(this.V);
            a.u(this.o);
            a.u(this.ba);
            a.u(this.Da);
            a.ub(this.S);
            a.P(this.h);
            a.P(this.w)
        }
        ka(a) {
            var b =
                this.a;
            b.x = a.v();
            b.y = a.v();
            b = this.G;
            b.x = a.v();
            b.y = a.v();
            b = this.pa;
            b.x = a.v();
            b.y = a.v();
            this.V = a.v();
            this.o = a.v();
            this.ba = a.v();
            this.Da = a.v();
            this.S = a.ib();
            this.h = a.N();
            this.w = a.N()
        }
        Pp() {
            let a = new sa;
            this.Sk(a);
            return a
        }
        Sk(a) {
            var b = a.a,
                c = this.a;
            b.x = c.x;
            b.y = c.y;
            b = a.G;
            c = this.G;
            b.x = c.x;
            b.y = c.y;
            b = a.pa;
            c = this.pa;
            b.x = c.x;
            b.y = c.y;
            a.V = this.V;
            a.o = this.o;
            a.ba = this.ba;
            a.Da = this.Da;
            a.S = this.S;
            a.h = this.h;
            a.w = this.w
        }
    }
    class qb {
        constructor() {
            this.Qb = -1;
            this.fb = new T(m.j.di.A());
            this.Xc = new hc;
            this.f = x.Ha(qb.O);
            let a =
                x.Aa(this.f);
            this.Sb = new Pb(a.get("red-score"), 0);
            this.Nb = new Pb(a.get("blue-score"), 0);
            x.replaceWith(a.get("timer"), this.Xc.f);
            x.replaceWith(a.get("canvas"), this.fb.la)
        }
        B(a) {
            var b = m.j.di.A();
            if (this.fb.up != b) {
                let c = this.fb.la;
                this.fb = new T(b);
                x.replaceWith(c, this.fb.la)
            }
            b = a.M;
            null == b ? this.f.hidden = !0 : (this.f.hidden = !1, this.Xc.Wr(60 * a.Fa), this.Xc.Vr(b.Nc | 0), this.Nb.set(b.Nb), this.Sb.set(b.Sb), this.fb.Rc(a, this.Qb))
        }
    }
    class G {
        constructor() {
            this.Dd = 0;
            this.w = 32;
            this.h = 63;
            this.o = 1;
            this.a = new P(0, 0)
        }
        fa(a) {
            let b =
                this.a;
            a.u(b.x);
            a.u(b.y);
            a.u(this.o);
            a.P(this.h);
            a.P(this.w)
        }
        ka(a) {
            let b = this.a;
            b.x = a.v();
            b.y = a.v();
            this.o = a.v();
            this.h = a.N();
            this.w = a.N()
        }
    }
    class W {
        constructor(a) {
            W.zb || this.Ya(a)
        }
        Ya(a) {
            this.$ = 0;
            this.U = a
        }
    }
    class O {
        static mj(a, b) {
            a = a.charCodeAt(b);
            if (a == a) return a
        }
        static substr(a, b, c) {
            if (null == c) c = a.length;
            else if (0 > c)
                if (0 == b) c = a.length + c;
                else return "";
            return a.substr(b, c)
        }
        static remove(a, b) {
            b = a.indexOf(b);
            if (-1 == b) return !1;
            a.splice(b, 1);
            return !0
        }
        static now() {
            return Date.now()
        }
    }
    class rb {
        constructor(a) {
            this.f =
                x.Ha(rb.O);
            var b = x.Aa(this.f);
            this.yh = b.get("cancel");
            this.mk = b.get("create");
            this.mf = b.get("name");
            this.Dl = b.get("pass");
            this.ii = b.get("max-pl");
            this.Wm = b.get("unlisted");
            this.mf.maxLength = 40;
            this.mf.value = a;
            let c = this;
            this.mf.oninput = function() {
                c.B()
            };
            this.Dl.maxLength = 30;
            this.Wm.onclick = function() {
                c.Tj(!c.Xm)
            };
            this.yh.onclick = function() {
                H.i(c.ki)
            };
            this.mk.onclick = function() {
                if (c.Ic()) {
                    let d = c.Dl.value;
                    "" == d && (d = null);
                    D.i(c.iq, {
                        name: c.mf.value,
                        password: d,
                        Ys: c.ii.selectedIndex + 2,
                        pt: c.Xm
                    })
                }
            };
            for (a =
                2; 21 > a;) b = window.document.createElement("option"), b.textContent = "" + a++, this.ii.appendChild(b);
            this.ii.selectedIndex = 10;
            this.Tj(!1);
            this.B()
        }
        Tj(a) {
            this.Xm = a;
            this.Wm.textContent = "Show in room list: " + (a ? "No" : "Yes")
        }
        Ic() {
            let a = this.mf.value;
            return 40 >= a.length ? 0 < a.length : !1
        }
        B() {
            this.mk.disabled = !this.Ic()
        }
    }
    class La {
        constructor(a) {
            function b() {
                let t = g[f];
                a.Il = e ? t : 0;
                c.get("spd").textContent = t + "x"
            }
            this.jg = !1;
            this.f = x.Ha(La.O);
            let c = x.Aa(this.f);
            this.Ci = a;
            let d = this;
            c.get("reset").onclick = function() {
                a.Di();
                d.xl()
            };
            let e = !0,
                f = 2,
                g = [.5, .75, 1, 2, 3];
            b();
            let h = c.get("playicon");
            h.classList.add("icon-pause");
            c.get("play").onclick = function() {
                e = !e;
                let t = h.classList;
                t.toggle("icon-play", !e);
                t.toggle("icon-pause", e);
                b()
            };
            c.get("spdup").onclick = function() {
                f += 1;
                let t = g.length - 1;
                f > t && (f = t);
                b()
            };
            c.get("spddn").onclick = function() {
                --f;
                0 > f && (f = 0);
                b()
            };
            this.hs = c.get("time");
            let k = c.get("timebar");
            this.$q = c.get("progbar");
            let l = c.get("timetooltip"),
                n = 0,
                r = a.kl;
            for (; n < r.length;) {
                let t = r[n];
                ++n;
                let z = window.document.createElement("div");
                z.className = "marker";
                z.classList.add("k" + t.kind);
                z.style.left = 100 * t.wj + "%";
                k.appendChild(z)
            }
            k.onclick = function(t) {
                a.Fr((t.pageX - k.offsetLeft) / k.clientWidth * a.qh * a.yf);
                d.jg || (d.jg = !0, d.vq(), d.xl())
            };
            k.onmousemove = function(t) {
                t = (t.pageX - k.offsetLeft) / k.clientWidth;
                l.textContent = La.ll(a.yf * a.qh * t);
                return l.style.left = "calc(" + 100 * t + "% - 30px)"
            };
            this.Dp = c.get("leave");
            this.Dp.onclick = function() {
                H.i(d.ke)
            }
        }
        B() {
            this.hs.textContent = La.ll(this.Ci.Tb);
            this.$q.style.width = 100 * this.Ci.$o() + "%";
            !this.jg || 0 < this.Ci.Pd ||
                (this.jg = !1, this.uq())
        }
        static ll(a) {
            a = a / 1E3 | 0;
            return (a / 60 | 0) + ":" + Z.Lf(Q.Fe(a % 60))
        }
    }
    class Ra {
        constructor(a) {
            this.Up = a
        }
    }
    class sb {
        constructor(a, b) {
            this.f = x.Ha(sb.O);
            let c = x.Aa(this.f);
            this.lf = c.get("name");
            this.Uf = c.get("admin");
            this.bf = c.get("kick");
            this.wd = c.get("close");
            let d = this;
            this.Uf.onclick = function() {
                Aa.i(d.aq, d.Qb, !d.Jl)
            };
            this.bf.onclick = function() {
                D.i(d.mi, d.Qb)
            };
            this.wd.onclick = function() {
                H.i(d.qb)
            };
            this.Qb = a.X;
            this.Sj(a.D);
            this.Rj(a.eb);
            this.Uf.disabled = !b || 0 == this.Qb;
            this.bf.disabled = !b || 0 == this.Qb
        }
        B(a, b) {
            a = a.oa(this.Qb);
            null == a ? H.i(this.qb) : (this.ts(a), this.Uf.disabled = !b || 0 == this.Qb, this.bf.disabled = !b || 0 == this.Qb)
        }
        ts(a) {
            this.ne != a.D && this.Sj(a.D);
            this.Jl != a.eb && this.Rj(a.eb)
        }
        Sj(a) {
            this.ne = a;
            this.lf.textContent = a
        }
        Rj(a) {
            this.Jl = a;
            this.Uf.textContent = a ? "Remove Admin" : "Give Admin"
        }
    }
    class Ac {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
    }
    class B {
        static Op() {
            C.qj(function() {
                B.Bk(B.Xq)
            });
            B.Fp()
        }
        static Fp() {
            let a = m.j.Uj.A();
            null == a ? U.So().then(function(b) {
                    B.Ue = b;
                    m.j.Uj.ta(b.ms())
                }).catch(function() {}) :
                U.Ro(a).then(function(b) {
                    return B.Ue = b
                }).catch(function() {})
        }
        static Vo() {
            let a = zc.gn();
            return null != a ? null != a.getItem("crappy_router") : !1
        }
        static Bk(a) {
            let b = new tb(m.j.ne.A());
            b.vl = function(c) {
                m.j.ne.ta(c);
                m.Na.lm();
                a()
            };
            C.La(b.f);
            b.Eb.focus()
        }
        static Ck(a, b) {
            a = new aa(a);
            a.Va = b;
            C.La(a.f)
        }
        static Ho(a, b) {
            function c() {
                let f = new Za("Failed", null);
                f.Va = function() {
                    B.yb()
                };
                C.La(f.f)
            }

            function d(f) {
                f = f.sitekey;
                if (null == f) throw v.C(null);
                B.Ck(f, function(g) {
                    e(a, g)
                })
            }
            C.La((new ba("Connecting", "Connecting...",
                [])).f);
            let e = null;
            e = function(f, g) {
                Y.Sl(m.Pe + "api/client", "room=" + f + "&rcr=" + g, Y.Gj).then(function(h) {
                    switch (h.action) {
                        case "connect":
                            h = h.token;
                            if (null == h) throw v.C(null);
                            b(h);
                            break;
                        case "recaptcha":
                            d(h);
                            break;
                        default:
                            throw v.C(null);
                    }
                }).catch(function() {
                    c()
                })
            };
            e(a, "")
        }
        static Xq() {
            let a = Bc.A(),
                b = a.get("c"),
                c = a.get("p");
            a.get("v");
            null != b ? null != c ? B.Ih(b) : B.cg(b) : B.yb()
        }
        static yb() {
            let a = new $a(m.j.Ph());
            C.La(a.Ja);
            a.qn = function(b) {
                if (9 != b.Ed.Rd) {
                    let c;
                    9 > b.Ed.Rd ? (b = "Old version room", c = "The room is running an older version, an update must have happened recently.") :
                        (b = "New version", c = "The room is running a new version of haxball, refresh the site to update.");
                    let d = new ba(b, c, ["Ok"]);
                    C.La(d.f);
                    d.Va = function() {
                        C.La(a.Ja);
                        d.Va = null
                    }
                } else b.Ed.Kb ? B.Ih(b.aa) : B.cg(b.aa)
            };
            a.ct = function() {
                B.Io()
            };
            a.bt = function() {
                B.Bk(B.yb)
            };
            a.et = function() {
                B.Ek()
            };
            a.dt = function(b) {
                B.Jo(b)
            }
        }
        static Ek() {
            let a = new la(!0),
                b = window.document.createElement("div");
            b.className = "view-wrapper";
            b.appendChild(a.f);
            C.La(b);
            a.qb = function() {
                B.yb()
            };
            a.cq = function() {
                let c = new ub,
                    d = window.document.createElement("div");
                d.className = "view-wrapper";
                d.appendChild(c.f);
                C.La(d);
                c.qb = function() {
                    B.Ek()
                }
            }
        }
        static hi(a, b) {
            return "" + pa.location.origin + "/play?c=" + a + (b ? "&p=1" : "")
        }
        static Io() {
            let a = m.j.ne.A(),
                b = new rb("" + a + "'s room");
            C.La(b.f);
            b.ki = function() {
                B.yb()
            };
            b.iq = function(c) {
                function d() {
                    if (!c.pt) {
                        var t = new Qb;
                        t.Rd = 9;
                        t.D = g.lc;
                        t.K = g.K.length;
                        t.jf = k.rg + 1;
                        t.vb = f.vb;
                        t.Kb = null != k.Kb;
                        t.Jc = f.Jc;
                        t.Mc = f.Mc;
                        var z = A.ia(16);
                        t.fa(z);
                        k.Pi(z.Sg())
                    }
                }
                C.La((new ba("Creating room", "Connecting...", [])).f);
                let e = null,
                    f = m.j.Ph(),
                    g = new ta;
                g.lc =
                    c.name;
                let h = new ua;
                h.D = a;
                h.eb = !0;
                h.country = f.vb;
                h.Zb = m.j.uh.A();
                g.K.push(h);
                let k = new Rb({
                    iceServers: m.ig,
                    tj: m.Pe + "api/host",
                    state: g,
                    version: 9
                });
                k.rg = c.Ys - 1;
                k.Kb = c.password;
                d();
                let l = new Ma(k),
                    n = !1;
                k.sf = function(t, z) {
                    B.Ck(t, function(K) {
                        z(K);
                        C.La(l.l.f);
                        n = !0
                    })
                };
                let r = window.setInterval(function() {
                    k.sa(Ia.na(k))
                }, 3E3);
                k.sl = function(t) {
                    null != g.oa(t) && k.sa(ka.na(t, "Bad actor", !1))
                };
                k.gq = function(t, z) {
                    let K = z.kc();
                    if (25 < K.length) throw v.C("name too long");
                    let N = z.kc();
                    if (3 < N.length) throw v.C("country too long");
                    z = z.Bb();
                    if (null != z && 2 < z.length) throw v.C("avatar too long");
                    k.sa(Da.na(t, K, N, z));
                    d()
                };
                k.hq = function(t) {
                    null != g.oa(t) && k.sa(ka.na(t, null, !1))
                };
                k.wg = function(t) {
                    e = t;
                    l.Lg = B.hi(t, null != k.Kb);
                    n || (n = !0, C.La(l.l.f))
                };
                l.Nh.nq = function(t, z, K, N) {
                    k.No(t, z, K, N)
                };
                l.Nh.oq = function() {
                    d()
                };
                l.l.ke = function() {
                    k.ja();
                    l.ja();
                    B.yb();
                    window.clearInterval(r)
                };
                l.ag.Og = function(t) {
                    k.Kb = t;
                    d();
                    null != e && (l.Lg = B.hi(e, null != k.Kb))
                };
                l.ag.Bm = function(t) {
                    k.Oi(t)
                };
                l.ag.be = M(k, k.be)
            }
        }
        static Ih(a) {
            let b = new vb;
            C.La(b.f);
            b.Va = function(c) {
                null ==
                    c ? B.yb() : B.cg(a, c)
            }
        }
        static Jo(a) {
            try {
                let b = new ic(new Sb(new Uint8Array(a), new ta, 3));
                b.qe.ke = function() {
                    b.ja();
                    B.yb()
                };
                C.La(b.l.f)
            } catch (b) {
                let c = v.Lb(b).Gb();
                if (c instanceof Tb) a = new ba("Incompatible replay version", "The replay file is of a different version", ["Open player", "Cancel"]), C.La(a.f), a.Va = function(d) {
                    0 == d ? (d = window.top.location, window.top.open(d.protocol + "//" + d.hostname + (null != d.port ? ":" + d.port : "") + "/replay?v=" + c.Rd, "_self")) : B.yb()
                };
                else {
                    let d = new ba("Replay error", "Couldn't load the file.",
                        ["Ok"]);
                    C.La(d.f);
                    d.Va = function() {
                        d.Va = null;
                        B.yb()
                    }
                }
            }
        }
        static cg(a, b, c) {
            try {
                let d = B.Vo(),
                    e = new ta,
                    f = A.ia();
                f.oc(m.j.ne.A());
                f.oc(m.j.Ph().vb);
                f.Fb(m.j.uh.A());
                let g = new Na(a, {
                        iceServers: m.ig,
                        tj: m.Bs,
                        state: e,
                        version: 9,
                        rt: f.Sg(),
                        password: b,
                        vn: d,
                        zn: c,
                        Ls: B.Ue
                    }),
                    h = new wb;
                h.ca("Connecting to master...");
                h.yh.onclick = function() {
                    g.Jd = null;
                    g.rf = null;
                    g.ja();
                    B.yb()
                };
                C.La(h.f);
                let k = function(r, t) {
                        r = new Za(r, t);
                        r.Va = function() {
                            B.yb()
                        };
                        C.La(r.f)
                    },
                    l = function() {
                        let r = new ba("Connection Failed", "", ["Ok"]);
                        r.ce.innerHTML =
                            "<p>Failed to connect to room host.</p><p>If this problem persists please see the <a href='https://github.com/haxball/haxball-issues/wiki/Connection-Issues' target='_blank'>troubleshooting guide</a>.</p>";
                        r.Va = function() {
                            B.yb()
                        };
                        C.La(r.f)
                    },
                    n = function() {
                        let r = new Ma(g);
                        g.wl = function(t) {
                            r.l.Gf.Sr(g.Eg.jh() | 0, g.Eg.max() | 0);
                            r.l.Gf.Gl.Ln(t)
                        };
                        r.Lg = B.hi(a, !1);
                        C.La(r.l.f);
                        r.l.ke = function() {
                            g.Jd = null;
                            g.ja();
                            r.ja();
                            B.yb()
                        };
                        g.Jd = function() {
                            g.Jd = null;
                            r.ja();
                            let t = null == r.Od ? null : r.Od.stop();
                            k(g.wk, t)
                        }
                    };
                g.rf =
                    function(r) {
                        g.rf = null;
                        g.Jd = null;
                        switch (r.ob) {
                            case 1:
                                l();
                                break;
                            case 2:
                                switch (r.reason) {
                                    case 4004:
                                        B.Ho(a, function(t) {
                                            B.cg(a, b, t)
                                        });
                                        break;
                                    case 4101:
                                        null == b ? B.Ih(a) : k(Na.Ch(r), null);
                                        break;
                                    default:
                                        k(Na.Ch(r), null)
                                }
                                break;
                            default:
                                k(Na.Ch(r), null)
                        }
                    };
                g.Jd = function(r) {
                    switch (r) {
                        case 1:
                            h.ca("Connecting to peer...");
                            break;
                        case 2:
                            h.ca("Awaiting state...");
                            break;
                        case 3:
                            n()
                    }
                };
                g.sq = function() {
                    h.ca("Trying reverse connection...")
                }
            } catch (d) {
                c = v.Lb(d).Gb(), pa.console.log(c), c = new ba("Unexpected Error", "", []), c.ce.innerHTML =
                    "An error ocurred while attempting to join the room.<br><br>This might be caused by a browser extension, try disabling all extensions and refreshing the site.<br><br>The error has been printed to the inspector console.", C.La(c.f)
            }
        }
    }
    class xb {
        constructor(a) {
            this.xk = !1;
            this.Im = new Oa(u.Ma);
            this.Zj = new Oa(u.Ca);
            this.am = new Oa(u.ga);
            this.f = x.Ha(xb.O);
            let b = x.Aa(this.f);
            this.lc = b.get("room-name");
            this.Lm = b.get("start-btn");
            this.Nm = b.get("stop-btn");
            this.oi = b.get("pause-btn");
            this.Pn = b.get("auto-btn");
            this.cl =
                b.get("lock-btn");
            this.km = b.get("reset-all-btn");
            this.Zl = b.get("rec-btn");
            let c = b.get("link-btn"),
                d = b.get("leave-btn"),
                e = b.get("rand-btn");
            this.If = b.get("time-limit-sel");
            this.Bf = b.get("score-limit-sel");
            this.Jm = b.get("stadium-name");
            this.Km = b.get("stadium-pick");
            let f = this;
            this.Km.onclick = function() {
                H.i(f.xq)
            };
            this.Xh(b.get("red-list"), this.am, a);
            this.Xh(b.get("blue-list"), this.Zj, a);
            this.Xh(b.get("spec-list"), this.Im, a);
            this.jl(this.If, this.il());
            this.jl(this.Bf, this.il());
            this.If.onchange = function() {
                D.i(f.Bq,
                    f.If.selectedIndex)
            };
            this.Bf.onchange = function() {
                D.i(f.tq, f.Bf.selectedIndex)
            };
            this.Lm.onclick = function() {
                H.i(f.yq)
            };
            this.Nm.onclick = function() {
                H.i(f.zq)
            };
            this.oi.onclick = function() {
                H.i(f.mq)
            };
            this.Pn.onclick = function() {
                H.i(f.bq)
            };
            this.cl.onclick = function() {
                D.i(f.Aq, !f.bi)
            };
            this.km.onclick = function() {
                null != f.le && (f.le(u.Ca), f.le(u.ga))
            };
            this.Zl.onclick = function() {
                H.i(f.qq)
            };
            c.onclick = function() {
                H.i(f.wq)
            };
            d.onclick = function() {
                H.i(f.ke)
            };
            e.onclick = function() {
                H.i(f.pq)
            };
            this.Pj(!1);
            this.Qj(!1)
        }
        Xh(a,
            b, c) {
            x.replaceWith(a, b.f);
            let d = this;
            b.yg = function(e, f) {
                Aa.i(d.yg, e, f)
            };
            b.le = function(e) {
                D.i(d.le, e)
            };
            b.jq = function(e) {
                Aa.i(d.yg, c, e)
            };
            b.tf = function(e) {
                D.i(d.tf, e)
            }
        }
        il() {
            let a = [],
                b = 0;
            for (; 15 > b;) {
                let c = b++;
                a.push(null == c ? "null" : "" + c)
            }
            return a
        }
        jl(a, b) {
            let c = 0;
            for (; c < b.length;) {
                let d = b[c++],
                    e = window.document.createElement("option");
                e.textContent = d;
                a.appendChild(e)
            }
        }
        Tr(a) {
            this.Zl.classList.toggle("active", a)
        }
        B(a, b) {
            this.ur != a.lc && (this.ur = a.lc, this.lc.textContent = a.lc);
            b = null == b ? !1 : b.eb;
            this.xk != b && (this.f.className =
                "room-view" + (b ? " admin" : ""), this.xk = b);
            var c = !b || null != a.M;
            this.If.disabled = c;
            this.Bf.disabled = c;
            this.Km.disabled = c;
            c = null != a.M;
            this.Lm.hidden = c;
            this.Nm.hidden = !c;
            this.oi.hidden = !c;
            this.If.selectedIndex = a.Fa;
            this.Bf.selectedIndex = a.jb;
            this.Jm.textContent = a.T.D;
            this.Jm.classList.toggle("custom", !a.T.af());
            let d = a.Wc;
            for (var e = this.am, f = a.K, g = [], h = 0; h < f.length;) {
                var k = f[h];
                ++h;
                k.ea == u.ga && g.push(k)
            }
            e.B(g, d, c, b);
            e = this.Zj;
            f = a.K;
            g = [];
            for (h = 0; h < f.length;) k = f[h], ++h, k.ea == u.Ca && g.push(k);
            e.B(g, d, c, b);
            e =
                this.Im;
            f = a.K;
            g = [];
            for (h = 0; h < f.length;) k = f[h], ++h, k.ea == u.Ma && g.push(k);
            e.B(g, d, c, b);
            this.km.disabled = c;
            this.bi != a.Wc && this.Pj(a.Wc);
            c && (a = 120 == a.M.Qa, this.El != a && this.Qj(a))
        }
        Pj(a) {
            this.bi = a;
            this.cl.innerHTML = this.bi ? "<i class='icon-lock'></i>Unlock" : "<i class='icon-lock-open'></i>Lock"
        }
        Qj(a) {
            this.El = a;
            this.oi.innerHTML = "<i class='icon-pause'></i>" + (this.El ? "Resume (P)" : "Pause (P)")
        }
    }
    class va {
        constructor() {
            this.od = 16777215;
            this.gb = []
        }
        fa(a) {
            a.m(this.sd);
            a.P(this.od);
            a.m(this.gb.length);
            let b = 0,
                c = this.gb;
            for (; b < c.length;) a.P(c[b++])
        }
        ka(a) {
            this.sd = a.F();
            this.od = a.N();
            let b = a.F();
            if (3 < b) throw v.C("too many");
            this.gb = [];
            let c = 0;
            for (; c < b;) ++c, this.gb.push(a.N())
        }
    }
    class H {
        static i(a) {
            null != a && a()
        }
    }
    class jc {
        constructor() {
            this.hash = 0
        }
        Fs(a) {
            let b = 0,
                c = a.length;
            for (; b < c;) this.hash = (this.hash += a[b++]) + (this.hash << 10), this.hash ^= this.hash >>> 6
        }
    }
    class yb {
        constructor() {
            this.Gl = new kc;
            this.f = x.Ha(yb.O);
            let a = x.Aa(this.f);
            this.Dg = a.get("ping");
            this.Qo = a.get("fps");
            x.replaceWith(a.get("graph"), this.Gl.f)
        }
        Sr(a, b) {
            this.Dg.textContent =
                "Ping: " + a + " - " + b
        }
        Am(a) {
            this.Qo.textContent = "Fps: " + a
        }
    }
    class Oa {
        constructor(a) {
            this.Gd = new Map;
            this.f = x.Ha(Oa.O);
            this.f.className += " " + a.Co;
            let b = x.Aa(this.f);
            this.bb = b.get("list");
            this.$h = b.get("join-btn");
            this.Ei = b.get("reset-btn");
            a == u.Ma && this.Ei.remove();
            this.$h.textContent = "" + a.D;
            this.f.ondragover = this.f.vt = function(d) {
                -1 != d.dataTransfer.types.indexOf("player") && d.preventDefault()
            };
            let c = this;
            this.f.ondrop = function(d) {
                d.preventDefault();
                d = d.dataTransfer.getData("player");
                null != d && (d = Q.parseInt(d),
                    null != d && Aa.i(c.yg, d, a))
            };
            this.$h.onclick = function() {
                D.i(c.jq, a)
            };
            this.Ei.onclick = function() {
                D.i(c.le, a)
            }
        }
        B(a, b, c, d) {
            this.$h.disabled = b || c;
            this.Ei.disabled = c;
            b = new Set;
            c = this.Gd.keys();
            for (var e = c.next(); !e.done;) {
                var f = e.value;
                e = c.next();
                b.add(f)
            }
            let g = this;
            for (c = 0; c < a.length;) e = a[c], ++c, f = this.Gd.get(e.X), null == f && (f = new jb(e), f.tf = function(h) {
                D.i(g.tf, h)
            }, this.Gd.set(e.X, f), this.bb.appendChild(f.f)), f.B(e, d), b.delete(e.X);
            d = b.values();
            for (b = d.next(); !b.done;) c = b.value, b = d.next(), this.Gd.get(c).f.remove(),
                this.Gd.delete(c);
            d = 0;
            for (b = a.length - 1; d < b;) e = d++, c = this.Gd.get(a[e].X).f, e = this.Gd.get(a[e + 1].X).f, c.nextSibling != e && this.bb.insertBefore(c, e)
        }
    }
    class zb {
        constructor() {
            this.kg = !1;
            this.D = "";
            this.wh = 0;
            this.Wf = "";
            this.lb = new va;
            let a = window.document.createElement("canvas");
            a.width = 64;
            a.height = 64;
            this.sb = a.getContext("2d", null);
            this.Wj = this.sb.createPattern(this.sb.canvas, "no-repeat");
            this.Ao()
        }
        Ao() {
            let a = window.document.createElement("canvas");
            a.width = 160;
            a.height = 34;
            this.Ol = a.getContext("2d", null)
        }
        us() {
            let a =
                this.Ol;
            a.resetTransform();
            a.clearRect(0, 0, 160, 34);
            a.font = "26px sans-serif";
            a.fillStyle = "white";
            160 < a.measureText(this.D).width ? (a.textAlign = "left", a.translate(2, 29)) : (a.textAlign = "center", a.translate(80, 29));
            a.fillText(this.D, 0, 0)
        }
        Mo(a, b, c) {
            a.drawImage(this.Ol.canvas, 0, 0, 160, 34, b - 40, c - 34, 80, 17)
        }
        B(a, b) {
            if (null != a.J) {
                let c = m.j.Pm.A() ? b.lb[a.ea.aa] : a.ea.Om,
                    d = null != a.Sd ? a.Sd : a.Zb,
                    e = m.j.Em.A() && null != d;
                if (!zb.fo(this.lb, c) || !e && a.Mb != this.wh || e && this.Wf != d) zb.wo(this.lb, c), e ? (this.Wf = d, this.wh = -1) : (this.Wf =
                    "" + a.Mb, this.wh = a.Mb), this.gr(this.Wf)
            }
            this.Fo = 0 < b.M.Qa || !a.Yb ? "black" : a.Yb && 0 >= a.$c && 0 <= a.Bc ? "white" : "black";
            a.D != this.D && (this.D = a.D, this.us())
        }
        gr(a) {
            let b = this.lb.gb;
            if (!(1 > b.length)) {
                this.sb.save();
                this.sb.translate(32, 32);
                this.sb.rotate(3.141592653589793 * this.lb.sd / 128);
                for (var c = -32, d = 64 / b.length, e = 0; e < b.length;) this.sb.fillStyle = T.nc(b[e++]), this.sb.fillRect(c, -32, d + 4, 64), c += d;
                this.sb.restore();
                this.sb.fillStyle = T.nc(this.lb.od);
                this.sb.textAlign = "center";
                this.sb.textBaseline = "alphabetic";
                this.sb.font = "900 34px 'Arial Black','Arial Bold',Gadget,sans-serif";
                this.sb.fillText(a, 32, 44);
                this.Wj = this.sb.createPattern(this.sb.canvas, "no-repeat")
            }
        }
        static fo(a, b) {
            if (a.sd != b.sd || a.od != b.od) return !1;
            a = a.gb;
            b = b.gb;
            if (a.length != b.length) return !1;
            let c = 0,
                d = a.length;
            for (; c < d;) {
                let e = c++;
                if (a[e] != b[e]) return !1
            }
            return !0
        }
        static wo(a, b) {
            a.sd = b.sd;
            a.od = b.od;
            a.gb = b.gb.slice(0)
        }
    }
    class ca {
        constructor() {
            this.jc = -1;
            this.ic = null;
            this.Sb = this.Nb = this.Nc = this.Qa = 0;
            this.he = u.ga;
            this.yc = this.Db = 0;
            this.ua = new ab;
            this.Fa = 0;
            this.jb = 5;
            this.T = null
        }
        rp(a) {
            this.Pa = a;
            this.jb = a.jb;
            this.Fa = a.Fa;
            this.T = a.T;
            this.ua.L = this.T.L;
            this.ua.ra = this.T.ra;
            this.ua.W = this.T.W;
            this.ua.pb = this.T.pb;
            a = 0;
            let b = this.T.H;
            for (; a < b.length;) this.ua.H.push(b[a++].Pp());
            this.Wk()
        }
        Tk(a) {
            if (a.ea == u.Ma) a.J = null;
            else {
                a.Ea = 0;
                var b = a.J;
                null == b && (b = new sa, a.J = b, this.ua.H.push(b));
                var c = this.T.Ld;
                b.S = 0;
                b.V = c.V;
                b.ba = c.ba;
                b.Da = c.Da;
                b.o = c.o;
                b.h = 39;
                b.w = a.ea.w | c.w;
                var d = a.ea == u.ga ? this.T.Nd : this.T.vd;
                0 == d.length ? (b.a.x = a.ea.Hh * this.T.bc, b.a.y = 0) : (a = b.a,
                    d = d[d.length - 1], a.x = d.x, a.y = d.y);
                d = b.G;
                d.x = 0;
                d.y = 0;
                b = b.pa;
                c = c.pa;
                b.x = c.x;
                b.y = c.y
            }
        }
        B(a) {
            if (0 < this.Qa) 120 > this.Qa && this.Qa--;
            else {
                var b = this.Pa.tt;
                null != b && b();
                b = this.Pa.K;
                for (var c = 0; c < b.length;) {
                    var d = b[c];
                    ++c;
                    if (null != d.J) {
                        0 == (d.Ea & 16) && (d.Yb = !1);
                        var e = this.T.Ld;
                        0 < d.$c && d.$c--;
                        d.Bc < this.Pa.je && d.Bc++;
                        if (d.Yb && 0 >= d.$c && 0 <= d.Bc) {
                            for (var f = !1, g = 0, h = this.ua.H; g < h.length;) {
                                var k = h[g];
                                ++g;
                                if (0 != (k.w & 64) && k != d.J) {
                                    var l = k.a,
                                        n = d.J.a,
                                        r = l.x - n.x;
                                    l = l.y - n.y;
                                    n = Math.sqrt(r * r + l * l);
                                    if (4 > n - k.V - d.J.V) {
                                        f = r / n;
                                        r = l / n;
                                        l =
                                            e.cf;
                                        var t = n = k.G;
                                        k = k.ba;
                                        n.x = t.x + f * l * k;
                                        n.y = t.y + r * l * k;
                                        t = d.J;
                                        k = -e.df;
                                        n = l = t.G;
                                        t = t.ba;
                                        l.x = n.x + f * k * t;
                                        l.y = n.y + r * k * t;
                                        f = !0
                                    }
                                }
                            }
                            f && (null != this.Pa.si && this.Pa.si(d), d.Yb = !1, d.$c = this.Pa.Hd, d.Bc -= this.Pa.gd)
                        }
                        f = d.Ea;
                        h = g = 0;
                        0 != (f & 1) && --h;
                        0 != (f & 2) && ++h;
                        0 != (f & 4) && --g;
                        0 != (f & 8) && ++g;
                        0 != g && 0 != h && (f = Math.sqrt(g * g + h * h), g /= f, h /= f);
                        f = d.J.G;
                        k = d.Yb ? e.ef : e.Ne;
                        f.x += g * k;
                        f.y += h * k;
                        d.J.Da = d.Yb ? e.ff : e.Da
                    }
                }
                c = 0;
                d = this.ua.H;
                e = 0;
                for (g = d.length; e < g;) f = e++, h = d[f], 0 != (h.w & 128) && (ca.vk[c] = f, f = ca.pl[c], h = h.a, f.x = h.x, f.y = h.y, ++c);
                this.ua.B(a);
                if (0 == this.Db) {
                    for (a = 0; a < b.length;) c = b[a], ++a, null != c.J && (c.J.h = 39 | this.he.zp);
                    b = this.ua.H[0].G;
                    0 < b.x * b.x + b.y * b.y && (this.Db = 1)
                } else if (1 == this.Db) {
                    this.Nc += .016666666666666666;
                    for (a = 0; a < b.length;) d = b[a], ++a, null != d.J && (d.J.h = 39);
                    d = u.Ma;
                    b = this.ua.H;
                    for (a = 0; a < c && (d = a++, d = this.T.eo(b[ca.vk[d]].a, ca.pl[d]), d == u.Ma););
                    d != u.Ma ? (this.Db = 2, this.yc = 150, this.he = d, d == u.ga ? this.Nb++ : this.Sb++, null != this.Pa.Yi && this.Pa.Yi(d.Bg), null != this.Pa.hm && this.Pa.hm(d.aa)) : 0 < this.Fa && this.Nc >= 60 * this.Fa && this.Sb != this.Nb &&
                        (null != this.Pa.$i && this.Pa.$i(), this.Mm())
                } else if (2 == this.Db) this.yc--, 0 >= this.yc && (0 < this.jb && (this.Sb >= this.jb || this.Nb >= this.jb) || 0 < this.Fa && this.Nc >= 60 * this.Fa && this.Sb != this.Nb ? this.Mm() : (this.Wk(), null != this.Pa.Lq && this.Pa.Lq()));
                else if (3 == this.Db && (this.yc--, 0 >= this.yc && (b = this.Pa, null != b.M))) {
                    b.M = null;
                    a = 0;
                    for (c = b.K; a < c.length;) d = c[a], ++a, d.J = null, d.Mb = 0;
                    null != b.Hf && b.Hf(null)
                }
            }
        }
        Mm() {
            this.yc = 300;
            this.Db = 3;
            null != this.Pa.Zi && this.Pa.Zi(this.Sb > this.Nb ? u.ga : u.Ca)
        }
        Wk() {
            let a = this.Pa.K;
            this.Db =
                0;
            for (var b = this.T.H, c = this.ua.H, d = 0, e = this.T.Af ? b.length : 1; d < e;) {
                var f = d++;
                b[f].Sk(c[f])
            }
            b = [0, 0, 0];
            for (c = 0; c < a.length;)
                if (d = a[c], ++c, this.Tk(d), e = d.ea, e != u.Ma) {
                    f = d.J.a;
                    var g = this.T,
                        h = b[e.aa],
                        k = e == u.ga ? g.Nd : g.vd;
                    0 == k.length ? (k = h + 1 >> 1, 0 == (h & 1) && (k = -k), g = g.mc * e.Hh, h = 55 * k) : (h >= k.length && (h = k.length - 1), h = k[h], g = h.x, h = h.y);
                    f.x = g;
                    f.y = h;
                    b[e.aa]++;
                    d.Mb = b[e.aa]
                }
        }
        fa(a) {
            this.ua.fa(a);
            a.P(this.yc);
            a.P(this.Db);
            a.P(this.Sb);
            a.P(this.Nb);
            a.u(this.Nc);
            a.P(this.Qa);
            a.m(this.he.aa)
        }
        ka(a, b) {
            this.ua.ka(a);
            this.yc = a.N();
            this.Db = a.N();
            this.Sb = a.N();
            this.Nb = a.N();
            this.Nc = a.v();
            this.Qa = a.N();
            a = a.wf();
            this.he = 1 == a ? u.ga : 2 == a ? u.Ca : u.Ma;
            this.Pa = b;
            this.jb = b.jb;
            this.Fa = b.Fa;
            this.T = b.T;
            this.ua.L = this.T.L;
            this.ua.W = this.T.W;
            this.ua.ra = this.T.ra;
            this.ua.pb = this.T.pb
        }
        uc() {
            let a = wa.Cc,
                b = this.ic;
            this.jc != a && (null == b && (this.ic = b = new ca), this.jc = a, ca.zd(b, this));
            return b
        }
        static zd(a, b) {
            a.Pa = b.Pa.uc();
            a.jb = b.jb;
            a.Fa = b.Fa;
            a.ua = b.ua.uc();
            a.yc = b.yc;
            a.Db = b.Db;
            a.Sb = b.Sb;
            a.Nb = b.Nb;
            a.Nc = b.Nc;
            a.Qa = b.Qa;
            a.T = b.T;
            a.he = b.he
        }
    }
    class w {
        static en(a) {
            if (null ==
                a) return null;
            if (a instanceof Array) return Array;
            {
                let b = a.g;
                if (null != b) return b;
                a = w.Jj(a);
                return null != a ? w.Jn(a) : null
            }
        }
        static Me(a, b) {
            if (null == a) return "null";
            if (5 <= b.length) return "<...>";
            var c = typeof a;
            "function" == c && (a.b || a.Tf) && (c = "object");
            switch (c) {
                case "function":
                    return "<function>";
                case "object":
                    if (a.Hb) {
                        var d = Ab[a.Hb].Zd[a.ob];
                        c = d.wc;
                        if (d.Le) {
                            b += "\t";
                            var e = [],
                                f = 0;
                            for (d = d.Le; f < d.length;) {
                                let g = d[f];
                                f += 1;
                                e.push(w.Me(a[g], b))
                            }
                            a = e;
                            return c + "(" + a.join(",") + ")"
                        }
                        return c
                    }
                    if (a instanceof Array) {
                        c = "[";
                        b += "\t";
                        e = 0;
                        for (f = a.length; e < f;) d = e++, c += (0 < d ? "," : "") + w.Me(a[d], b);
                        return c += "]"
                    }
                    try {
                        e = a.toString
                    } catch (g) {
                        return "???"
                    }
                    if (null != e && e != Object.toString && "function" == typeof e && (c = a.toString(), "[object Object]" != c)) return c;
                    c = "{\n";
                    b += "\t";
                    e = null != a.hasOwnProperty;
                    f = null;
                    for (f in a) e && !a.hasOwnProperty(f) || "prototype" == f || "__class__" == f || "__super__" == f || "__interfaces__" == f || "__properties__" == f || (2 != c.length && (c += ", \n"), c += b + f + " : " + w.Me(a[f], b));
                    b = b.substring(1);
                    return c += "\n" + b + "}";
                case "string":
                    return a;
                default:
                    return String(a)
            }
        }
        static Hj(a, b) {
            for (;;) {
                if (null == a) return !1;
                if (a == b) return !0;
                let c = a.qd;
                if (null != c && (null == a.ha || a.ha.qd != c)) {
                    let d = 0,
                        e = c.length;
                    for (; d < e;) {
                        let f = c[d++];
                        if (f == b || w.Hj(f, b)) return !0
                    }
                }
                a = a.ha
            }
        }
        static Hn(a, b) {
            if (null == b) return !1;
            switch (b) {
                case Array:
                    return a instanceof Array;
                case Cc:
                    return "boolean" == typeof a;
                case Lc:
                    return null != a;
                case E:
                    return "number" == typeof a;
                case Ub:
                    return "number" == typeof a ? (a | 0) === a : !1;
                case String:
                    return "string" == typeof a;
                default:
                    if (null != a)
                        if ("function" ==
                            typeof b) {
                            if (w.Gn(a, b)) return !0
                        } else {
                            if ("object" == typeof b && w.In(b) && a instanceof b) return !0
                        }
                    else return !1;
                    return b == Mc && null != a.b || b == Nc && null != a.Tf ? !0 : null != a.Hb ? Ab[a.Hb] == b : !1
            }
        }
        static Gn(a, b) {
            return a instanceof b ? !0 : b.Ij ? w.Hj(w.en(a), b) : !1
        }
        static I(a, b) {
            if (null == a || w.Hn(a, b)) return a;
            throw v.C("Cannot cast " + Q.Fe(a) + " to " + Q.Fe(b));
        }
        static Jj(a) {
            a = w.Kn.call(a).slice(8, -1);
            return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
        }
        static In(a) {
            return null != w.Jj(a)
        }
        static Jn(a) {
            return pa[a]
        }
    }
    class Pb {
        constructor(a, b) {
            this.Ja = a;
            this.value = b;
            a.textContent = "" + b
        }
        set(a) {
            this.value != a && (this.value = a, this.Ja.textContent = "" + this.value)
        }
    }
    class Bb {
        constructor(a) {
            this.Ja = x.Ha(Bb.Cj, "tbody");
            var b = x.Aa(this.Ja);
            let c = b.get("name"),
                d = b.get("players"),
                e = b.get("distance"),
                f = b.get("pass");
            b = b.get("flag");
            this.lt = a;
            let g = a.Ed;
            c.textContent = g.D;
            d.textContent = "" + g.K + "/" + g.jf;
            f.textContent = g.Kb ? "Yes" : "No";
            e.textContent = "" + (a.We | 0) + "km";
            try {
                b.classList.add("f-" + g.vb.toLowerCase())
            } catch (h) {}
            9 > a.Ed.Rd && this.Ja.classList.add("old")
        }
    }
    class ba {
        constructor(a, b, c) {
            this.f = x.Ha(ba.O);
            var d = x.Aa(this.f);
            d.get("ok");
            d.get("cancel");
            this.ce = d.get("content");
            let e = d.get("title");
            d = d.get("buttons");
            let f = 0,
                g = this,
                h = 0;
            for (; h < c.length;) {
                let k = c[h++],
                    l = f++,
                    n = window.document.createElement("button");
                n.textContent = k;
                n.onclick = function() {
                    D.i(g.Va, l)
                };
                d.appendChild(n)
            }
            this.ce.textContent = b;
            e.textContent = a
        }
    }
    class lc {
        constructor() {
            this.Qc = new Set;
            this.lg = 0;
            window.document.addEventListener("focusout", M(this, this.tl))
        }
        ja() {
            window.document.removeEventListener("focusout",
                M(this, this.tl))
        }
        B() {
            let a = 0;
            this.Qc.has("Up") && (a = 1);
            this.Qc.has("Down") && (a |= 2);
            this.Qc.has("Left") && (a |= 4);
            this.Qc.has("Right") && (a |= 8);
            this.Qc.has("Kick") && (a |= 16);
            if (null != this.zg && a != this.lg) {
                this.lg = a;
                let b = new Ca;
                b.input = a;
                this.zg(b)
            }
        }
        rb(a) {
            var b = a.code;
            b = m.j.me.A().A(b);
            null != b && (a.preventDefault(), this.kq(b))
        }
        Kd(a) {
            a = m.j.me.A().A(a.code);
            null != a && this.$p(a)
        }
        kq(a) {
            this.Qc.has(a) || (this.Qc.add(a), this.B(), D.i(this.Zp, a))
        }
        $p(a) {
            this.Qc.delete(a) && this.B()
        }
        tl() {
            if (null != this.zg && 0 != this.lg) {
                this.Qc.clear();
                this.lg = 0;
                let a = new Ca;
                a.input = 0;
                this.zg(a)
            }
        }
    }
    class q {
        constructor() {
            this.L = [];
            this.W = [];
            this.ra = [];
            this.vc = [];
            this.H = [];
            this.pb = [];
            this.Nd = [];
            this.vd = [];
            this.Ld = new Vb;
            this.Gh = 255;
            this.Re = this.kf = 0;
            this.Yf = !0;
            this.Af = !1
        }
        pg() {
            let a = new ra;
            a.S = 16777215;
            a.h = 63;
            a.w = 193;
            a.V = 10;
            a.Da = .99;
            a.ba = 1;
            a.o = .5;
            return a
        }
        fa(a) {
            a.m(this.Gh);
            if (!this.af()) {
                a.Fb(this.D);
                a.P(this.ud);
                a.u(this.ae);
                a.u(this.$d);
                a.u(this.bd);
                a.u(this.Gc);
                a.u(this.Qe);
                a.P(this.td);
                a.u(this.bc);
                a.u(this.sc);
                a.u(this.mc);
                this.Ld.fa(a);
                a.Wb(this.kf);
                a.m(this.Re);
                a.m(this.Yf ? 1 : 0);
                a.m(this.Af ? 1 : 0);
                a.m(this.L.length);
                for (var b = 0, c = this.L.length; b < c;) {
                    var d = b++;
                    let e = this.L[d];
                    e.Dd = d;
                    e.fa(a)
                }
                a.m(this.W.length);
                b = 0;
                for (c = this.W; b < c.length;) c[b++].fa(a);
                a.m(this.ra.length);
                b = 0;
                for (c = this.ra; b < c.length;) c[b++].fa(a);
                a.m(this.vc.length);
                b = 0;
                for (c = this.vc; b < c.length;) c[b++].fa(a);
                a.m(this.H.length);
                b = 0;
                for (c = this.H; b < c.length;) c[b++].fa(a);
                a.m(this.pb.length);
                b = 0;
                for (c = this.pb; b < c.length;) c[b++].fa(a);
                a.m(this.Nd.length);
                b = 0;
                for (c = this.Nd; b < c.length;) d =
                    c[b], ++b, a.u(d.x), a.u(d.y);
                a.m(this.vd.length);
                b = 0;
                for (c = this.vd; b < c.length;) d = c[b], ++b, a.u(d.x), a.u(d.y)
            }
        }
        qs(a) {
            function b() {
                let f = [],
                    g = a.F(),
                    h = 0;
                for (; h < g;) {
                    ++h;
                    let k = new P(0, 0);
                    k.x = a.v();
                    k.y = a.v();
                    f.push(k)
                }
                return f
            }
            this.D = a.Bb();
            this.ud = a.N();
            this.ae = a.v();
            this.$d = a.v();
            this.bd = a.v();
            this.Gc = a.v();
            this.Qe = a.v();
            this.td = a.N();
            this.bc = a.v();
            this.sc = a.v();
            this.mc = a.v();
            this.Ld.ka(a);
            this.kf = a.Rb();
            this.Re = a.F();
            this.Yf = 0 != a.F();
            this.Af = 0 != a.F();
            this.L = [];
            for (var c = a.F(), d = 0; d < c;) {
                var e = new G;
                e.ka(a);
                e.Dd = d++;
                this.L.push(e)
            }
            this.W = [];
            c = a.F();
            for (d = 0; d < c;) ++d, e = new I, e.ka(a, this.L), this.W.push(e);
            this.ra = [];
            c = a.F();
            for (d = 0; d < c;) ++d, e = new R, e.ka(a), this.ra.push(e);
            this.vc = [];
            c = a.F();
            for (d = 0; d < c;) ++d, e = new Cb, e.ka(a), this.vc.push(e);
            this.H = [];
            c = a.F();
            for (d = 0; d < c;) ++d, e = new ra, e.ka(a), this.H.push(e);
            this.pb = [];
            c = a.F();
            for (d = 0; d < c;) ++d, e = new Db, e.ka(a), this.pb.push(e);
            this.Nd = b();
            this.vd = b();
            this.oe();
            if (!this.Zm()) throw v.C(new Ra("Invalid stadium"));
        }
        Zm() {
            return 0 >= this.H.length || 0 > this.Gc || 0 > this.bd ||
                0 > this.Ld.V ? !1 : !0
        }
        oe() {
            let a = 0,
                b = this.W;
            for (; a < b.length;) b[a++].oe()
        }
        af() {
            return 255 != this.Gh
        }
        ie(a, b) {
            a = a[b];
            return null != a ? w.I(a, E) : 0
        }
        Mp(a) {
            a = a.canBeStored;
            return null != a ? w.I(a, Cc) : !0
        }
        Ae() {
            return JSON.stringify(this.ls())
        }
        ls() {
            if (!this.Yf) throw v.C(0);
            let a = {};
            for (var b = 0, c = [], d = 0, e = this.L; d < e.length;) {
                var f = e[d];
                ++d;
                f.Dd = b++;
                c.push(q.zs(f))
            }
            d = new I;
            b = [];
            e = 0;
            for (f = this.W; e < f.length;) b.push(q.Gr(f[e++], d));
            d = [];
            e = 0;
            for (f = this.ra; e < f.length;) d.push(q.Gq(f[e++]));
            e = [];
            f = 0;
            for (var g = this.vc; f < g.length;) e.push(q.cp(g[f++]));
            f = q.Jq(this.Ld);
            var h = new ra;
            g = [];
            for (var k = 0, l = this.H; k < l.length;) g.push(q.Go(l[k++], h));
            h = [];
            k = 0;
            for (l = this.pb; k < l.length;) h.push(q.xp(l[k++]));
            k = [];
            l = 0;
            for (var n = this.Nd; l < n.length;) {
                var r = n[l];
                ++l;
                k.push([r.x, r.y])
            }
            l = [];
            n = 0;
            for (r = this.vd; n < r.length;) {
                let t = r[n];
                ++n;
                l.push([t.x, t.y])
            }
            c = {
                name: this.D,
                width: this.bc,
                height: this.sc,
                bg: a,
                vertexes: c,
                segments: b,
                planes: d,
                goals: e,
                discs: g,
                playerPhysics: f,
                ballPhysics: "disc0"
            };
            q.ma(c, "maxViewWidth", this.kf, 0);
            q.ma(c, "cameraFollow", 1 == this.Re ? "player" : "", "");
            q.ma(c, "spawnDistance", this.mc, 200);
            0 != h.length && (c.joints = h);
            0 != k.length && (c.redSpawnPoints = k);
            0 != l.length && (c.blueSpawnPoints = l);
            q.ma(c, "kickOffReset", this.Af ? "full" : "partial", "partial");
            switch (this.ud) {
                case 1:
                    b = "grass";
                    break;
                case 2:
                    b = "hockey";
                    break;
                default:
                    b = "none"
            }
            q.ma(a, "type", b, "none");
            q.ma(a, "width", this.ae, 0);
            q.ma(a, "height", this.$d, 0);
            q.ma(a, "kickOffRadius", this.bd, 0);
            q.ma(a, "cornerRadius", this.Gc, 0);
            q.Cg(a, this.td, 7441498);
            q.ma(a, "goalLine", this.Qe, 0);
            return c
        }
        al(a) {
            function b(h) {
                let k =
                    w.I(h[0], E);
                h = w.I(h[1], E);
                null == h && (h = 0);
                null == k && (k = 0);
                return new P(k, h)
            }

            function c(h, k, l, n) {
                null == n && (n = !1);
                var r = d[k];
                if (!n || null != r)
                    if (n = w.I(r, Array), null != n)
                        for (r = 0; r < n.length;) {
                            let t = n[r];
                            ++r;
                            try {
                                q.On(t, f), h.push(l(t))
                            } catch (z) {
                                throw v.C(new Ra('Error in "' + k + '" index: ' + h.length));
                            }
                        }
            }
            let d = JSON5.parse(a);
            this.L = [];
            this.W = [];
            this.ra = [];
            this.vc = [];
            this.H = [];
            this.pb = [];
            this.D = w.I(d.name, String);
            this.bc = w.I(d.width, E);
            this.sc = w.I(d.height, E);
            this.kf = this.ie(d, "maxViewWidth") | 0;
            "player" == d.cameraFollow &&
                (this.Re = 1);
            this.mc = 200;
            a = d.spawnDistance;
            null != a && (this.mc = w.I(a, E));
            a = d.bg;
            let e;
            switch (a.type) {
                case "grass":
                    e = 1;
                    break;
                case "hockey":
                    e = 2;
                    break;
                default:
                    e = 0
            }
            this.ud = e;
            this.ae = this.ie(a, "width");
            this.$d = this.ie(a, "height");
            this.bd = this.ie(a, "kickOffRadius");
            this.Gc = this.ie(a, "cornerRadius");
            this.td = 7441498;
            null != a.color && (this.td = q.ng(a.color));
            this.Qe = this.ie(a, "goalLine");
            this.Yf = this.Mp(d);
            this.Af = "full" == d.kickOffReset;
            let f = d.traits;
            a = d.ballPhysics;
            "disc0" != a && (null != a ? (a = q.bl(a, this.pg()), a.w |=
                192, this.H.push(a)) : this.H.push(this.pg()));
            c(this.L, "vertexes", q.Lp);
            let g = this;
            c(this.W, "segments", function(h) {
                return q.Kp(h, g.L)
            });
            c(this.vc, "goals", q.Gp);
            c(this.H, "discs", function(h) {
                return q.bl(h, new ra)
            });
            c(this.ra, "planes", q.Ip);
            c(this.pb, "joints", function(h) {
                return q.Hp(h, g.H)
            }, !0);
            c(this.Nd, "redSpawnPoints", b, !0);
            c(this.vd, "blueSpawnPoints", b, !0);
            a = d.playerPhysics;
            null != a && (this.Ld = q.Jp(a));
            if (255 < this.L.length || 255 < this.W.length || 255 < this.ra.length || 255 < this.vc.length || 255 < this.H.length) throw v.C("Error");
            this.oe();
            if (!this.Zm()) throw v.C(new Ra("Invalid stadium"));
        }
        hk() {
            let a = q.js;
            a.a = 0;
            this.fa(a);
            let b = new jc;
            b.Fs(a.Vb());
            b.hash = (b.hash += b.hash << 3) ^ b.hash >>> 11;
            b.hash += b.hash << 15;
            return b.hash | 0
        }
        eo(a, b) {
            let c = 0,
                d = this.vc;
            for (; c < d.length;) {
                let h = d[c];
                ++c;
                var e = h.Y,
                    f = h.da,
                    g = b.x - a.x;
                let k = b.y - a.y;
                0 < -(e.y - a.y) * g + (e.x - a.x) * k == 0 < -(f.y - a.y) * g + (f.x - a.x) * k ? e = !1 : (g = f.x - e.x, f = f.y - e.y, e = 0 < -(a.y - e.y) * g + (a.x - e.x) * f == 0 < -(b.y - e.y) * g + (b.x - e.x) * f ? !1 : !0);
                if (e) return h.ye
            }
            return u.Ma
        }
        jd(a, b, c, d, e, f, g, h) {
            null == h && (h =
                0);
            this.D = a;
            this.H.push(this.pg());
            this.bc = b;
            this.sc = c;
            this.ud = 1;
            this.td = 7441498;
            this.ae = d;
            this.$d = e;
            this.bd = g;
            this.Gc = h;
            this.mc = .75 * d;
            400 < this.mc && (this.mc = 400);
            a = new R;
            var k = a.xa;
            k.x = 0;
            k.y = 1;
            a.Ua = -c;
            a.o = 0;
            this.ra.push(a);
            a = new R;
            k = a.xa;
            k.x = 0;
            k.y = -1;
            a.Ua = -c;
            a.o = 0;
            this.ra.push(a);
            a = new R;
            k = a.xa;
            k.x = 1;
            k.y = 0;
            a.Ua = -b;
            a.o = 0;
            this.ra.push(a);
            a = new R;
            k = a.xa;
            k.x = -1;
            k.y = 0;
            a.Ua = -b;
            a.o = 0;
            this.ra.push(a);
            this.qg(d, 1, f, 13421823, u.Ca);
            this.qg(-d, -1, f, 16764108, u.ga);
            this.gl(g, c);
            b = new R;
            c = b.xa;
            c.x = 0;
            c.y = 1;
            b.Ua = -e;
            b.h = 1;
            this.ra.push(b);
            b = new R;
            c = b.xa;
            c.x = 0;
            c.y = -1;
            b.Ua = -e;
            b.h = 1;
            this.ra.push(b);
            b = new G;
            c = b.a;
            c.x = -d;
            c.y = -e;
            b.h = 0;
            c = new G;
            g = c.a;
            g.x = d;
            g.y = -e;
            c.h = 0;
            g = new G;
            a = g.a;
            a.x = d;
            a.y = -f;
            g.h = 0;
            a = new G;
            k = a.a;
            k.x = d;
            k.y = f;
            a.h = 0;
            k = new G;
            var l = k.a;
            l.x = d;
            l.y = e;
            k.h = 0;
            l = new G;
            var n = l.a;
            n.x = -d;
            n.y = e;
            l.h = 0;
            n = new G;
            var r = n.a;
            r.x = -d;
            r.y = f;
            n.h = 0;
            r = new G;
            var t = r.a;
            t.x = -d;
            t.y = -f;
            r.h = 0;
            f = new I;
            f.Y = c;
            f.da = g;
            f.h = 1;
            f.$a = !1;
            t = new I;
            t.Y = a;
            t.da = k;
            t.h = 1;
            t.$a = !1;
            let z = new I;
            z.Y = l;
            z.da = n;
            z.h = 1;
            z.$a = !1;
            let K = new I;
            K.Y = r;
            K.da = b;
            K.h =
                1;
            K.$a = !1;
            this.L.push(b);
            this.L.push(c);
            this.L.push(g);
            this.L.push(a);
            this.L.push(k);
            this.L.push(l);
            this.L.push(n);
            this.L.push(r);
            this.W.push(f);
            this.W.push(t);
            this.W.push(z);
            this.W.push(K);
            this.el(d, e, h);
            this.oe()
        }
        fl(a, b, c, d, e, f, g, h) {
            this.D = a;
            this.H.push(this.pg());
            this.bc = b;
            this.sc = c;
            this.ud = 2;
            this.ae = d;
            this.$d = e;
            this.bd = 75;
            this.Gc = h;
            this.Qe = g;
            this.mc = .75 * (d - g);
            400 < this.mc && (this.mc = 400);
            a = new R;
            var k = a.xa;
            k.x = 0;
            k.y = 1;
            a.Ua = -c;
            a.o = 0;
            this.ra.push(a);
            a = new R;
            k = a.xa;
            k.x = 0;
            k.y = -1;
            a.Ua = -c;
            a.o = 0;
            this.ra.push(a);
            a = new R;
            k = a.xa;
            k.x = 1;
            k.y = 0;
            a.Ua = -b;
            a.o = 0;
            this.ra.push(a);
            a = new R;
            k = a.xa;
            k.x = -1;
            k.y = 0;
            a.Ua = -b;
            a.o = 0;
            this.ra.push(a);
            this.qg(d - g, 1, f, 13421823, u.Ca, 63);
            this.qg(-d + g, -1, f, 16764108, u.ga, 63);
            this.gl(75, c);
            b = new R;
            c = b.xa;
            c.x = 0;
            c.y = 1;
            b.Ua = -e;
            b.h = 1;
            this.ra.push(b);
            b = new R;
            c = b.xa;
            c.x = 0;
            c.y = -1;
            b.Ua = -e;
            b.h = 1;
            this.ra.push(b);
            b = new R;
            c = b.xa;
            c.x = 1;
            c.y = 0;
            b.Ua = -d;
            b.h = 1;
            this.ra.push(b);
            b = new R;
            c = b.xa;
            c.x = -1;
            c.y = 0;
            b.Ua = -d;
            b.h = 1;
            this.ra.push(b);
            this.el(d, e, h);
            this.oe()
        }
        qg(a, b, c, d, e, f) {
            var g;
            null == g && (g = 32);
            null == f &&
                (f = 1);
            var h = new G,
                k = h.a;
            k.x = a + 8 * b;
            k.y = -c;
            k = new G;
            var l = k.a;
            l.x = a + 8 * b;
            l.y = c;
            let n = new G;
            l = n.a;
            l.x = h.a.x + 22 * b;
            l.y = h.a.y + 22;
            let r = new G;
            l = r.a;
            l.x = k.a.x + 22 * b;
            l.y = k.a.y - 22;
            l = new I;
            l.Y = h;
            l.da = n;
            l.Vc(90 * b);
            let t = new I;
            t.Y = r;
            t.da = n;
            let z = new I;
            z.Y = r;
            z.da = k;
            z.Vc(90 * b);
            b = this.L.length;
            this.L.push(h);
            this.L.push(k);
            this.L.push(n);
            this.L.push(r);
            h = b;
            for (b = this.L.length; h < b;) k = h++, this.L[k].h = f, this.L[k].w = g, this.L[k].o = .1;
            b = this.W.length;
            this.W.push(l);
            this.W.push(t);
            this.W.push(z);
            h = b;
            for (b = this.W.length; h <
                b;) k = h++, this.W[k].h = f, this.W[k].w = g, this.W[k].o = .1;
            f = new ra;
            g = f.a;
            g.x = a;
            g.y = -c;
            f.ba = 0;
            f.V = 8;
            f.S = d;
            this.H.push(f);
            f = new ra;
            g = f.a;
            g.x = a;
            g.y = c;
            f.ba = 0;
            f.V = 8;
            f.S = d;
            this.H.push(f);
            d = new Cb;
            f = d.Y;
            f.x = a;
            f.y = -c;
            f = d.da;
            f.x = a;
            f.y = c;
            d.ye = e;
            this.vc.push(d)
        }
        gl(a, b) {
            let c = new G;
            var d = c.a;
            d.x = 0;
            d.y = -b;
            c.o = .1;
            c.w = 24;
            c.h = 6;
            d = new G;
            var e = d.a;
            e.x = 0;
            e.y = -a;
            d.o = .1;
            d.w = 24;
            d.h = 6;
            e = new G;
            var f = e.a;
            f.x = 0;
            f.y = a;
            e.o = .1;
            e.w = 24;
            e.h = 6;
            a = new G;
            f = a.a;
            f.x = 0;
            f.y = b;
            a.o = .1;
            a.w = 24;
            a.h = 6;
            b = new I;
            b.Y = c;
            b.da = d;
            b.w = 24;
            b.h = 6;
            b.$a = !1;
            b.o =
                .1;
            f = new I;
            f.Y = e;
            f.da = a;
            f.w = 24;
            f.h = 6;
            f.$a = !1;
            f.o = .1;
            let g = new I;
            g.Y = d;
            g.da = e;
            g.w = 8;
            g.h = 6;
            g.$a = !1;
            g.Vc(180);
            g.o = .1;
            let h = new I;
            h.Y = e;
            h.da = d;
            h.w = 16;
            h.h = 6;
            h.$a = !1;
            h.Vc(180);
            h.o = .1;
            this.L.push(c);
            this.L.push(d);
            this.L.push(e);
            this.L.push(a);
            this.W.push(b);
            this.W.push(f);
            this.W.push(g);
            this.W.push(h)
        }
        el(a, b, c) {
            if (!(0 >= c)) {
                var d = new G,
                    e = d.a;
                e.x = -a + c;
                e.y = -b;
                d.h = 0;
                e = new G;
                var f = e.a;
                f.x = -a;
                f.y = -b + c;
                e.h = 0;
                f = new G;
                var g = f.a;
                g.x = -a + c;
                g.y = b;
                f.h = 0;
                g = new G;
                var h = g.a;
                h.x = -a;
                h.y = b - c;
                g.h = 0;
                h = new G;
                var k = h.a;
                k.x = a -
                    c;
                k.y = b;
                h.h = 0;
                k = new G;
                var l = k.a;
                l.x = a;
                l.y = b - c;
                k.h = 0;
                l = new G;
                var n = l.a;
                n.x = a - c;
                n.y = -b;
                l.h = 0;
                n = new G;
                var r = n.a;
                r.x = a;
                r.y = -b + c;
                n.h = 0;
                a = new I;
                a.Y = d;
                a.da = e;
                a.h = 1;
                a.$a = !1;
                a.o = 1;
                a.Vc(-90);
                b = new I;
                b.Y = f;
                b.da = g;
                b.h = 1;
                b.$a = !1;
                b.o = 1;
                b.Vc(90);
                c = new I;
                c.Y = h;
                c.da = k;
                c.h = 1;
                c.$a = !1;
                c.o = 1;
                c.Vc(-90);
                r = new I;
                r.Y = l;
                r.da = n;
                r.h = 1;
                r.$a = !1;
                r.o = 1;
                r.Vc(90);
                this.L.push(d);
                this.L.push(e);
                this.L.push(f);
                this.L.push(g);
                this.L.push(h);
                this.L.push(k);
                this.L.push(l);
                this.L.push(n);
                this.W.push(a);
                this.W.push(b);
                this.W.push(c);
                this.W.push(r)
            }
        }
        static ka(a) {
            var b =
                a.F();
            return 255 == b ? (b = new q, b.qs(a), b) : q.Oh()[b]
        }
        static Oh() {
            if (null == q.xb) {
                q.xb = [];
                var a = new q;
                a.jd("Classic", 420, 200, 370, 170, 64, 75);
                q.xb.push(a);
                a = new q;
                a.jd("Easy", 420, 200, 370, 170, 90, 75);
                q.xb.push(a);
                a = new q;
                a.jd("Small", 420, 200, 320, 130, 55, 70);
                q.xb.push(a);
                a = new q;
                a.jd("Big", 600, 270, 550, 240, 80, 80);
                q.xb.push(a);
                a = new q;
                a.jd("Rounded", 420, 200, 370, 170, 64, 75, 75);
                q.xb.push(a);
                a = new q;
                a.fl("Hockey", 420, 204, 398, 182, 68, 120, 100);
                q.xb.push(a);
                a = new q;
                a.fl("Big Hockey", 600, 270, 550, 240, 90, 160, 150);
                q.xb.push(a);
                a = new q;
                a.jd("Big Easy", 600, 270, 550, 240, 95, 80);
                q.xb.push(a);
                a = new q;
                a.jd("Big Rounded", 600, 270, 550, 240, 80, 75, 100);
                q.xb.push(a);
                a = new q;
                a.jd("Huge", 750, 350, 700, 320, 100, 80);
                q.xb.push(a);
                a = 0;
                let b = q.xb.length;
                for (; a < b;) {
                    let c = a++;
                    q.xb[c].Gh = c
                }
            }
            return q.xb
        }
        static On(a, b) {
            if (null != a.trait && (b = b[w.I(a.trait, String)], null != b)) {
                let c = 0,
                    d = Dc.dn(b);
                for (; c < d.length;) {
                    let e = d[c];
                    ++c;
                    null == a[e] && (a[e] = b[e])
                }
            }
        }
        static Xn(a) {
            if (63 == a) return ["all"];
            let b = [];
            0 != (a & 2) && b.push("red");
            0 != (a & 4) && b.push("blue");
            0 != (a & 1) &&
                b.push("ball");
            0 != (a & 8) && b.push("redKO");
            0 != (a & 16) && b.push("blueKO");
            0 != (a & 32) && b.push("wall");
            0 != (a & 64) && b.push("kick");
            0 != (a & 128) && b.push("score");
            0 != (a & 268435456) && b.push("c0");
            0 != (a & 536870912) && b.push("c1");
            0 != (a & 1073741824) && b.push("c2");
            0 != (a & -2147483648) && b.push("c3");
            return b
        }
        static Kc(a) {
            a = w.I(a, Array);
            let b = 0,
                c = 0;
            for (; c < a.length;) switch (a[c++]) {
                case "all":
                    b |= 63;
                    break;
                case "ball":
                    b |= 1;
                    break;
                case "blue":
                    b |= 4;
                    break;
                case "blueKO":
                    b |= 16;
                    break;
                case "c0":
                    b |= 268435456;
                    break;
                case "c1":
                    b |= 536870912;
                    break;
                case "c2":
                    b |= 1073741824;
                    break;
                case "c3":
                    b |= -2147483648;
                    break;
                case "kick":
                    b |= 64;
                    break;
                case "red":
                    b |= 2;
                    break;
                case "redKO":
                    b |= 8;
                    break;
                case "score":
                    b |= 128;
                    break;
                case "wall":
                    b |= 32
            }
            return b
        }
        static Pc(a, b, c, d) {
            c != d && (a[b] = q.Xn(c))
        }
        static Cg(a, b, c) {
            b != c && (a.color = q.mo(b))
        }
        static mo(a) {
            a |= 0;
            return 0 > a ? "transparent" : Z.eh(a)
        }
        static ng(a) {
            if ("transparent" == a) return -1;
            if ("string" == typeof a) return Q.parseInt("0x" + Q.Fe(a));
            if (a instanceof Array) return ((a[0] | 0) << 16) + ((a[1] | 0) << 8) + (a[2] | 0);
            throw v.C("Bad color");
        }
        static zs(a) {
            let b = {
                x: a.a.x,
                y: a.a.y
            };
            q.ma(b, "bCoef", a.o, 1);
            q.Pc(b, "cMask", a.h, 63);
            q.Pc(b, "cGroup", a.w, 32);
            return b
        }
        static Lp(a) {
            let b = new G;
            b.a.x = w.I(a.x, E);
            b.a.y = w.I(a.y, E);
            var c = a.bCoef;
            null != c && (b.o = w.I(c, E));
            c = a.cMask;
            null != c && (b.h = q.Kc(c));
            a = a.cGroup;
            null != a && (b.w = q.Kc(a));
            return b
        }
        static Gr(a, b) {
            let c = {
                v0: a.Y.Dd,
                v1: a.da.Dd
            };
            q.ma(c, "bias", a.Hc, b.Hc);
            q.ma(c, "bCoef", a.o, b.o);
            let d = a.Wo();
            q.ma(c, "curve", d, 0);
            0 != d && (c.curveF = a.wb);
            q.ma(c, "vis", a.$a, b.$a);
            q.Pc(c, "cMask", a.h, b.h);
            q.Pc(c, "cGroup",
                a.w, b.w);
            q.Cg(c, a.S, b.S);
            return c
        }
        static Kp(a, b) {
            let c = new I;
            var d = w.I(a.v1, Ub);
            c.Y = b[w.I(a.v0, Ub)];
            c.da = b[d];
            b = a.bias;
            d = a.bCoef;
            let e = a.curve,
                f = a.curveF,
                g = a.vis,
                h = a.cMask,
                k = a.cGroup;
            a = a.color;
            null != b && (c.Hc = w.I(b, E));
            null != d && (c.o = w.I(d, E));
            null != f ? c.wb = w.I(f, E) : null != e && c.Vc(w.I(e, E));
            null != g && (c.$a = w.I(g, Cc));
            null != h && (c.h = q.Kc(h));
            null != k && (c.w = q.Kc(k));
            null != a && (c.S = q.ng(a));
            return c
        }
        static xp(a) {
            let b = {
                d0: a.fe,
                d1: a.ge,
                length: a.Jb >= a.fc ? a.Jb : [a.Jb, a.fc]
            };
            q.Cg(b, a.S, 0);
            q.ma(b, "strength", a.we,
                1 / 0);
            return b
        }
        static Hp(a, b) {
            let c = new Db;
            var d = w.I(a.d0, Ub),
                e = w.I(a.d1, Ub);
            let f = a.color,
                g = a.strength;
            a = a.length;
            if (d >= b.length || 0 > d) throw v.C(null);
            if (e >= b.length || 0 > e) throw v.C(null);
            c.fe = d;
            c.ge = e;
            null == a ? (d = b[d], e = b[e], null == d || null == e ? c.fc = c.Jb = 100 : (b = d.a, d = e.a, e = b.x - d.x, b = b.y - d.y, c.fc = c.Jb = Math.sqrt(e * e + b * b))) : a instanceof Array ? (c.Jb = w.I(a[0], E), c.fc = w.I(a[1], E)) : c.fc = c.Jb = w.I(a, E);
            c.we = null == g || "rigid" == g ? 1 / 0 : w.I(g, E);
            null != f && (c.S = q.ng(f));
            return c
        }
        static Gq(a) {
            let b = {
                normal: [a.xa.x, a.xa.y],
                dist: a.Ua
            };
            q.ma(b, "bCoef", a.o, 1);
            q.Pc(b, "cMask", a.h, 63);
            q.Pc(b, "cGroup", a.w, 32);
            return b
        }
        static Ip(a) {
            let b = new R;
            var c = w.I(a.normal, Array),
                d = w.I(c[0], E),
                e = w.I(c[1], E);
            c = b.xa;
            let f = d;
            var g = e;
            null == e && (g = 0);
            null == d && (f = 0);
            d = f;
            e = Math.sqrt(d * d + g * g);
            c.x = d / e;
            c.y = g / e;
            b.Ua = w.I(a.dist, E);
            c = a.bCoef;
            d = a.cMask;
            a = a.cGroup;
            null != c && (b.o = w.I(c, E));
            null != d && (b.h = q.Kc(d));
            null != a && (b.w = q.Kc(a));
            return b
        }
        static cp(a) {
            return {
                p0: [a.Y.x, a.Y.y],
                p1: [a.da.x, a.da.y],
                team: a.ye == u.ga ? "red" : "blue"
            }
        }
        static Gp(a) {
            let b = new Cb;
            var c = w.I(a.p0, Array);
            let d = w.I(a.p1, Array),
                e = b.Y;
            e.x = c[0];
            e.y = c[1];
            c = b.da;
            c.x = d[0];
            c.y = d[1];
            switch (a.team) {
                case "blue":
                    a = u.Ca;
                    break;
                case "red":
                    a = u.ga;
                    break;
                default:
                    throw v.C("Bad team value");
            }
            b.ye = a;
            return b
        }
        static Jq(a) {
            let b = {};
            q.ma(b, "bCoef", a.o, .5);
            q.ma(b, "invMass", a.ba, .5);
            q.ma(b, "damping", a.Da, .96);
            q.ma(b, "acceleration", a.Ne, .1);
            q.ma(b, "kickingAcceleration", a.ef, .07);
            q.ma(b, "kickingDamping", a.ff, .96);
            q.ma(b, "kickStrength", a.cf, 5);
            q.Pc(b, "cGroup", a.w, 0);
            if (0 != a.pa.x || 0 != a.pa.y) b.gravity = [a.pa.x,
                a.pa.y
            ];
            q.ma(b, "radius", a.V, 15);
            q.ma(b, "kickback", a.df, 0);
            return b
        }
        static Jp(a) {
            let b = new Vb;
            var c = a.bCoef,
                d = a.invMass;
            let e = a.damping,
                f = a.acceleration,
                g = a.kickingAcceleration,
                h = a.kickingDamping,
                k = a.kickStrength,
                l = a.gravity,
                n = a.cGroup,
                r = a.radius;
            a = a.kickback;
            null != c && (b.o = w.I(c, E));
            null != d && (b.ba = w.I(d, E));
            null != e && (b.Da = w.I(e, E));
            null != f && (b.Ne = w.I(f, E));
            null != g && (b.ef = w.I(g, E));
            null != h && (b.ff = w.I(h, E));
            null != k && (b.cf = w.I(k, E));
            null != l && (c = b.pa, d = w.I(l[1], E), c.x = w.I(l[0], E), c.y = d);
            null != n && (b.w =
                q.Kc(n));
            null != r && (b.V = w.I(r, E));
            null != a && (b.df = w.I(a, E));
            return b
        }
        static Go(a, b) {
            let c = {};
            if (a.a.x != b.a.x || a.a.y != b.a.y) c.pos = [a.a.x, a.a.y];
            if (a.G.x != b.G.x || a.G.y != b.G.y) c.speed = [a.G.x, a.G.y];
            if (a.pa.x != b.pa.x || a.pa.y != b.pa.y) c.gravity = [a.pa.x, a.pa.y];
            q.ma(c, "radius", a.V, b.V);
            q.ma(c, "bCoef", a.o, b.o);
            q.ma(c, "invMass", a.ba, b.ba);
            q.ma(c, "damping", a.Da, b.Da);
            q.Cg(c, a.S, b.S);
            q.Pc(c, "cMask", a.h, b.h);
            q.Pc(c, "cGroup", a.w, b.w);
            return c
        }
        static bl(a, b) {
            var c = a.pos,
                d = a.speed;
            let e = a.gravity,
                f = a.radius,
                g = a.bCoef,
                h = a.invMass,
                k = a.damping,
                l = a.color,
                n = a.cMask;
            a = a.cGroup;
            if (null != c) {
                let r = b.a;
                r.x = c[0];
                r.y = c[1]
            }
            null != d && (c = b.G, c.x = d[0], c.y = d[1]);
            null != e && (d = b.pa, d.x = e[0], d.y = e[1]);
            null != f && (b.V = w.I(f, E));
            null != g && (b.o = w.I(g, E));
            null != h && (b.ba = w.I(h, E));
            null != k && (b.Da = w.I(k, E));
            null != l && (b.S = q.ng(l));
            null != n && (b.h = q.Kc(n));
            null != a && (b.w = q.Kc(a));
            return b
        }
        static ma(a, b, c, d) {
            c != d && (a[b] = c)
        }
    }
    class Bc {
        static uf(a) {
            let b = new mc("([^&=]+)=?([^&]*)", "g");
            a = a.substring(1);
            var c = 0;
            let d = new Map;
            for (; b.Ws(a, c);) {
                c = b.on(1);
                c = decodeURIComponent(c.split("+").join(" "));
                let e = b.on(2);
                d.set(c, decodeURIComponent(e.split("+").join(" ")));
                c = b.Xs();
                c = c.wj + c.Us
            }
            return d
        }
        static A() {
            return Bc.uf(window.top.location.search)
        }
    }
    class Ic {
        static gs(a, b) {
            return new Promise(function(c, d) {
                let e = window.setTimeout(function() {
                    d("Timed out")
                }, b);
                a.then(function(f) {
                    window.clearTimeout(e);
                    c(f)
                }, function(f) {
                    window.clearTimeout(e);
                    d(f)
                })
            })
        }
    }
    class p {
        constructor() {
            p.zb || this.Ya()
        }
        Ya() {
            this.Dc = 0
        }
        sn() {
            return !0
        }
        apply() {
            throw v.C("missing implementation");
        }
        wa() {
            throw v.C("missing implementation");
        }
        va() {
            throw v.C("missing implementation");
        }
        static Ga(a) {
            null == a.delay && (a.delay = !0);
            null == a.Ba && (a.Ba = !0);
            return a
        }
        static Ia(a) {
            a.Fn = p.Jf;
            if (null == a.za) throw v.C("Class doesn't have a config");
            a.prototype.Kf = a.za;
            p.hn.set(p.Jf, a);
            p.Jf++
        }
        static vj(a, b) {
            let c = w.en(a).Fn;
            if (null == c) throw v.C("Tried to pack unregistered action");
            b.m(c);
            a.va(b)
        }
        static oh(a) {
            var b = a.F();
            b = Object.create(p.hn.get(b).prototype);
            b.Dc = 0;
            b.nb = 0;
            b.wa(a);
            return b
        }
    }
    class bb {
        constructor() {
            this.$e =
                this.Yh = !1;
            this.f = x.Ha(bb.O);
            let a = x.Aa(this.f);
            this.Lc = a.get("log");
            this.ci = a.get("log-contents");
            this.Za = a.get("input");
            this.Za.maxLength = 140;
            let b = this;
            a.get("drag").onmousedown = function(c) {
                function d(h) {
                    h.preventDefault();
                    m.j.gk.ta(fc(fc(e + (f - h.y))));
                    b.Za.blur();
                    b.$e = !1;
                    b.xf()
                }
                b.f.classList.add("dragging");
                let e = b.kk(),
                    f = c.y;
                c.preventDefault();
                let g = null;
                g = function(h) {
                    b.f.classList.remove("dragging");
                    d(h);
                    window.document.removeEventListener("mousemove", d, !1);
                    window.document.removeEventListener("mouseup",
                        g, !1)
                };
                window.document.addEventListener("mousemove", d, !1);
                window.document.addEventListener("mouseup", g, !1)
            };
            this.Fc = new Wb(a.get("autocompletebox"), function(c, d) {
                b.Za.value = c;
                b.Za.setSelectionRange(d, d)
            });
            this.Za.onkeydown = function(c) {
                switch (c.keyCode) {
                    case 9:
                        c.preventDefault();
                        b.Fc.Pb.hidden ? b.Za.blur() : b.Fc.Ko();
                        break;
                    case 13:
                        null != b.yl && "" != b.Za.value && b.yl(b.Za.value);
                        b.Za.value = "";
                        b.Za.blur();
                        break;
                    case 27:
                        b.Fc.Pb.hidden ? (b.Za.value = "", b.Za.blur()) : b.Fc.Uh();
                        break;
                    case 38:
                        b.Fc.dk(-1);
                        break;
                    case 40:
                        b.Fc.dk(1)
                }
                c.stopPropagation()
            };
            this.Za.onfocus = function() {
                null != b.ug && b.ug(!0);
                b.Yh = !0;
                b.xf()
            };
            this.Za.onblur = function() {
                null != b.ug && b.ug(!1);
                b.Yh = !1;
                b.Fc.Uh();
                b.xf()
            };
            this.Za.oninput = function() {
                b.Fc.ao(b.Za.value, b.Za.selectionStart)
            };
            this.xf()
        }
        ns() {
            this.$e = !this.$e;
            this.xf();
            if (!this.$e) {
                let a = this.Lc;
                window.setTimeout(function() {
                    a.scrollTop = a.scrollHeight
                }, 200)
            }
        }
        xf() {
            let a = "" + this.kk();
            this.f.style.height = a + "px"
        }
        kk() {
            let a = fc(m.j.gk.A());
            if (this.Yh) {
                let b = fc(m.j.Ah.A());
                a <= b && (a = b)
            } else this.$e && (a = 0);
            return a
        }
        Np(a, b, c) {
            let d =
                window.document.createElement("p");
            d.className = "announcement";
            d.textContent = a;
            0 <= b && (d.style.color = T.nc(b));
            switch (c) {
                case 1:
                case 4:
                    d.style.fontWeight = "bold";
                    break;
                case 2:
                case 5:
                    d.style.fontStyle = "italic"
            }
            switch (c) {
                case 3:
                case 4:
                case 5:
                    d.style.fontSize = "12px"
            }
            this.dl(d)
        }
        dl(a) {
            var b = this.Lc.clientHeight;
            b = this.Lc.scrollTop + b - this.Lc.scrollHeight >= .5 * -b || !bb.tp(this.Lc);
            this.ci.appendChild(a);
            b && (this.Lc.scrollTop = this.Lc.scrollHeight);
            for (a = b ? 50 : 100; this.ci.childElementCount > a;) this.ci.firstElementChild.remove()
        }
        ca(a,
            b) {
            let c = window.document.createElement("p");
            null != b && (c.className = b);
            c.textContent = a;
            this.dl(c)
        }
        Ib(a) {
            this.ca(a, "notice")
        }
        static tp(a) {
            return a.parentElement.querySelector(":hover") == a
        }
    }
    class m {}
    class ua {
        constructor() {
            this.Cc = -1;
            this.tn = null;
            this.ea = u.Ma;
            this.J = null;
            this.Bc = this.$c = 0;
            this.Yb = !1;
            this.Ea = this.X = 0;
            this.D = "Player";
            this.dh = this.Ab = 0;
            this.country = null;
            this.Td = !1;
            this.Zb = this.Sd = null;
            this.Mb = 0;
            this.eb = !1
        }
        va(a) {
            a.m(this.eb ? 1 : 0);
            a.P(this.Mb);
            a.Fb(this.Zb);
            a.Fb(this.Sd);
            a.m(this.Td ? 1 : 0);
            a.Fb(this.country);
            a.P(this.dh);
            a.Fb(this.D);
            a.P(this.Ea);
            a.mb(this.X);
            a.m(this.Yb ? 1 : 0);
            a.hj(this.Bc);
            a.m(this.$c);
            a.m(this.ea.aa);
            a.hj(null == this.J ? -1 : this.J.Cl)
        }
        wa(a, b) {
            this.eb = 0 != a.F();
            this.Mb = a.N();
            this.Zb = a.Bb();
            this.Sd = a.Bb();
            this.Td = 0 != a.F();
            this.country = a.Bb();
            this.dh = a.N();
            this.D = a.Bb();
            this.Ea = a.N();
            this.X = a.Cb();
            this.Yb = 0 != a.F();
            this.Bc = a.wi();
            this.$c = a.F();
            let c = a.wf();
            this.ea = 1 == c ? u.ga : 2 == c ? u.Ca : u.Ma;
            a = a.wi();
            this.J = 0 > a ? null : b[a]
        }
        Qs() {
            let a = wa.Cc,
                b = this.tn;
            this.Cc != a && (null == b && (this.tn = b = new ua), this.Cc =
                a, ua.Hs(b, this));
            return b
        }
        static Hs(a, b) {
            a.eb = b.eb;
            a.Mb = b.Mb;
            a.Zb = b.Zb;
            a.Sd = b.Sd;
            a.Td = b.Td;
            a.country = b.country;
            a.dh = b.dh;
            a.Ab = b.Ab;
            a.D = b.D;
            a.Ea = b.Ea;
            a.X = b.X;
            a.Yb = b.Yb;
            a.Bc = b.Bc;
            a.$c = b.$c;
            a.J = null == b.J ? null : b.J.uc();
            a.ea = b.ea
        }
    }
    class hc {
        constructor() {
            this.Fa = 0;
            this.zk = this.Ak = !1;
            this.Ve = 0;
            this.f = window.document.createElement("div");
            this.f.className = "game-timer-view";
            this.f.appendChild(this.Cq = this.de("OVERTIME!", "overtime"));
            this.f.appendChild(this.Wp = this.de("0", "digit"));
            this.f.appendChild(this.Vp =
                this.de("0", "digit"));
            this.f.appendChild(this.de(":", null));
            this.f.appendChild(this.Er = this.de("0", "digit"));
            this.f.appendChild(this.Dr = this.de("0", "digit"))
        }
        de(a, b) {
            let c = window.document.createElement("span");
            c.textContent = a;
            c.className = b;
            return c
        }
        Vr(a) {
            if (a != this.Ve) {
                let b = a % 60,
                    c = a / 60 | 0;
                this.Dr.textContent = "" + b % 10;
                this.Er.textContent = "" + (b / 10 | 0) % 10;
                this.Vp.textContent = "" + c % 10;
                this.Wp.textContent = "" + (c / 10 | 0) % 10;
                this.Ve = a
            }
            this.cm();
            this.dm()
        }
        Wr(a) {
            this.Fa = a;
            this.cm();
            this.dm()
        }
        cm() {
            this.Rr(0 != this.Fa &&
                this.Ve > this.Fa)
        }
        dm() {
            this.Xr(this.Ve < this.Fa && this.Ve > this.Fa - 30)
        }
        Rr(a) {
            a != this.zk && (this.Cq.className = a ? "overtime on" : "overtime", this.zk = a)
        }
        Xr(a) {
            a != this.Ak && (this.f.className = a ? "game-timer-view time-warn" : "game-timer-view", this.Ak = a)
        }
    }
    class Xb {
        static nh(a) {
            return new Promise(function(b, c) {
                a.onsuccess = function() {
                    b(a.result)
                };
                a.onerror = c
            })
        }
    }
    class Ob {
        static Br(a, b) {
            Ob.pm(new Blob([a], {
                type: "octet/stream"
            }), b)
        }
        static Cr(a, b) {
            Ob.pm(new Blob([a], {
                type: "text/plain"
            }), b)
        }
        static pm(a, b) {
            let c = window.document.createElement("a");
            c.style.display = "display: none";
            window.document.body.appendChild(c);
            a = URL.createObjectURL(a);
            c.href = a;
            c.download = b;
            c.click();
            URL.revokeObjectURL(a);
            c.remove()
        }
    }
    class Pa {}
    class T {
        constructor(a) {
            this.hd = window.performance.now();
            this.Rg = new Map;
            this.md = new Map;
            this.re = 1;
            this.xh = 100;
            this.Tg = 35;
            this.Md = 0;
            this.Gg = 1.5;
            this.Xa = new P(0, 0);
            this.Uk = !1;
            this.Cd = new nc;
            this.up = a;
            this.la = window.document.createElement("canvas");
            this.la.mozOpaque = !0;
            this.c = this.la.getContext("2d", {
                alpha: !1,
                desynchronized: a
            });
            this.fp =
                this.c.createPattern(m.ep, null);
            this.ro = this.c.createPattern(m.qo, null);
            this.po = this.c.createPattern(m.oo, null)
        }
        jp(a, b) {
            a = this.md.get(a.X);
            if (null != a) switch (b) {
                case 0:
                    a.kg = !0;
                    break;
                case 1:
                    a.kg = !1
            }
        }
        vs() {
            if (null != this.la.parentElement) {
                var a = window.devicePixelRatio * this.re;
                let b = this.la.getBoundingClientRect(),
                    c = Math.round(b.width * a);
                a = Math.round(b.height * a);
                if (this.la.width != c || this.la.height != a) this.la.width = c, this.la.height = a
            }
        }
        Rc(a, b) {
            var c = window.performance.now();
            let d = (c - this.hd) / 1E3;
            this.hd =
                c;
            this.Rg.clear();
            this.vs();
            T.Qi(this.c, !0);
            this.c.resetTransform();
            if (null != a.M) {
                c = a.M;
                var e = c.ua,
                    f = a.oa(b),
                    g = null != f ? f.J : null,
                    h = 0 != this.Md ? this.la.height / this.Md : this.Gg * window.devicePixelRatio * this.re;
                b = this.Tg * this.re;
                var k = this.xh * this.re,
                    l = c.T.kf,
                    n = this.la.width / h;
                0 < l && n > l && (n = l, h = this.la.width / l);
                l = (this.la.height - b - k) / h;
                this.ss(c, g, n, l, d);
                for (var r = 0, t = a.K; r < t.length;) {
                    let z = t[r];
                    ++r;
                    if (null == z.J) continue;
                    let K = this.md.get(z.X);
                    null == K && (K = new zb, this.md.set(z.X, K));
                    K.B(z, a);
                    this.Rg.set(z.J,
                        K)
                }
                this.c.translate(this.la.width / 2, (this.la.height + b - k) / 2);
                this.c.scale(h, h);
                this.c.translate(-this.Xa.x, -this.Xa.y);
                this.c.lineWidth = 3;
                this.sr(c.T);
                this.rr(c.T);
                h = e.H;
                r = 0;
                for (t = e.pb; r < t.length;) this.lr(t[r++], h);
                this.kr(a, n, l);
                this.mr(a, f);
                null != g && this.pr(g.a);
                this.c.lineWidth = 2;
                f = 0;
                for (g = a.K; f < g.length;) l = g[f], ++f, n = l.J, null != n && (l = this.md.get(l.X), this.em(n, l));
                f = 0;
                for (e = e.H; f < e.length;)
                    if (g = e[f], ++f, null == this.Rg.get(g)) {
                        if (0 > g.V) break;
                        this.em(g, null)
                    } this.c.lineWidth = 3;
                this.c.resetTransform();
                this.c.translate(this.la.width / 2, b + (this.la.height - b - k) / 2);
                this.nr(c);
                0 >= c.Qa && (this.Cd.B(d), this.Cd.Rc(this.c));
                this.Rg.clear();
                this.jr(a)
            }
        }
        jr(a) {
            let b = new Set;
            var c = 0;
            for (a = a.K; c < a.length;) b.add(a[c++].X);
            c = this.md.keys();
            for (a = c.next(); !a.done;) {
                let d = a.value;
                a = c.next();
                b.has(d) || this.md.delete(d)
            }
        }
        ss(a, b, c, d, e) {
            if (null != b && 1 == a.T.Re) {
                var f = b.a;
                var g = f.x;
                f = f.y;
                null == f && (f = 0);
                null == g && (g = 0)
            } else if (f = a.ua.H[0].a, g = f.x, f = f.y, null != b) {
                var h = b.a;
                g = .5 * (g + h.x);
                f = .5 * (f + h.y);
                var k = c;
                b = d;
                null == d && (b = 0);
                null == c && (k = 0);
                var l = .5 * k;
                let n = .5 * b;
                b = h.x - l + 50;
                k = h.y - n + 50;
                l = h.x + l - 50;
                h = h.y + n - 50;
                g = g > l ? l : g < b ? b : g;
                f = f > h ? h : f < k ? k : f
            }
            e *= 60;
            1 < e && (e = 1);
            b = g;
            b == b ? (b = f, b = b == b) : b = !1;
            b && (k = b = this.Xa, e *= .04, h = k.x, k = k.y, b.x = h + (g - h) * e, b.y = k + (f - k) * e);
            this.so(c, d, a.T)
        }
        so(a, b, c) {
            a > 2 * c.bc ? this.Xa.x = 0 : this.Xa.x + .5 * a > c.bc ? this.Xa.x = c.bc - .5 * a : this.Xa.x - .5 * a < -c.bc && (this.Xa.x = -c.bc + .5 * a);
            b > 2 * c.sc ? this.Xa.y = 0 : this.Xa.y + .5 * b > c.sc ? this.Xa.y = c.sc - .5 * b : this.Xa.y - .5 * b < -c.sc && (this.Xa.y = -c.sc + .5 * b)
        }
        pr(a) {
            this.c.beginPath();
            this.c.strokeStyle =
                "white";
            this.c.globalAlpha = .3;
            this.c.arc(a.x, a.y, 25, 0, 2 * Math.PI, !1);
            this.c.stroke();
            this.c.globalAlpha = 1
        }
        nr(a) {
            let b = 0 < a.Qa;
            this.Or(b);
            b && (120 != a.Qa && (a = a.Qa / 120 * 200, this.c.fillStyle = "white", this.c.fillRect(.5 * -a, 100, a, 20)), this.Cd.Eq.tr(this.c))
        }
        Or(a) {
            this.Uk != a && (this.la.style.filter = a ? "grayscale(70%)" : "", this.Uk = a)
        }
        om(a, b, c, d, e, f) {
            d = b + d;
            e = c + e;
            a.beginPath();
            a.moveTo(d - f, c);
            a.arcTo(d, c, d, c + f, f);
            a.lineTo(d, e - f);
            a.arcTo(d, e, d - f, e, f);
            a.lineTo(b + f, e);
            a.arcTo(b, e, b, e - f, f);
            a.lineTo(b, c + f);
            a.arcTo(b, c,
                b + f, c, f);
            a.closePath()
        }
        sr(a) {
            T.Qi(this.c, !1);
            var b = a.ae;
            let c = a.$d,
                d = this;
            if (1 == a.ud) this.c.save(), this.c.resetTransform(), this.c.fillStyle = T.nc(a.td), this.c.fillRect(0, 0, this.la.width, this.la.height), this.c.restore(), this.c.strokeStyle = "#C7E6BD", this.c.fillStyle = this.fp, this.om(this.c, -b, -c, 2 * b, 2 * c, a.Gc), this.c.save(), this.c.scale(2, 2), this.c.fill(), this.c.restore(), this.c.moveTo(0, -c), this.c.lineTo(0, c), this.c.stroke(), this.c.beginPath(), this.c.arc(0, 0, a.bd, 0, 2 * Math.PI), this.c.stroke();
            else if (2 ==
                a.ud) {
                this.c.strokeStyle = "#E9CC6E";
                this.c.save();
                this.c.beginPath();
                this.c.rect(this.Xa.x - 1E4, this.Xa.y - 1E4, 2E4, 2E4);
                this.c.scale(2, 2);
                this.c.fillStyle = this.po;
                this.c.fill();
                this.c.restore();
                this.c.save();
                this.om(this.c, -b, -c, 2 * b, 2 * c, a.Gc);
                this.c.scale(2, 2);
                this.c.fillStyle = this.ro;
                this.c.fill();
                this.c.restore();
                this.c.stroke();
                this.c.beginPath();
                this.c.moveTo(0, -c);
                this.c.setLineDash([15, 15]);
                this.c.lineTo(0, c);
                this.c.stroke();
                this.c.setLineDash([]);
                var e = a.Qe;
                b -= e;
                e < a.Gc && (b = 0);
                e = function(f, g, h) {
                    d.c.beginPath();
                    d.c.strokeStyle = f;
                    d.c.arc(0, 0, a.bd, -1.5707963267948966, 1.5707963267948966, h);
                    0 != g && (d.c.moveTo(g, -c), d.c.lineTo(g, c));
                    d.c.stroke()
                };
                e("#85ACF3", b, !1);
                e("#E18977", -b, !0)
            } else this.c.save(), this.c.resetTransform(), this.c.fillStyle = T.nc(a.td), this.c.fillRect(0, 0, this.la.width, this.la.height), this.c.restore();
            T.Qi(this.c, !0)
        }
        mr(a, b) {
            let c = m.j.Rk.A(),
                d = 0;
            for (a = a.K; d < a.length;) {
                let f = a[d];
                ++d;
                var e = f.J;
                if (null == e) continue;
                e = e.a;
                let g = this.md.get(f.X);
                c && g.kg && this.c.drawImage(m.Vm, e.x - .5 * m.Vm.width, e.y -
                    35);
                f != b && g.Mo(this.c, e.x, e.y + 50)
            }
        }
        em(a, b) {
            0 > a.V || (this.c.beginPath(), null == b ? (this.c.fillStyle = T.nc(a.S), this.c.strokeStyle = "black") : (this.c.fillStyle = b.Wj, this.c.strokeStyle = b.Fo), this.c.beginPath(), this.c.arc(a.a.x, a.a.y, a.V, 0, 2 * Math.PI, !1), null != b ? (this.c.save(), b = a.V / 32, this.c.translate(a.a.x, a.a.y), this.c.scale(b, b), this.c.translate(-32, -32), this.c.fill(), this.c.restore()) : -1 != (a.S | 0) && this.c.fill(), this.c.stroke())
        }
        rr(a) {
            if (null != a) {
                var b = 0;
                for (a = a.W; b < a.length;) this.qr(a[b++])
            }
        }
        lr(a, b) {
            if (!(0 >
                    a.S)) {
                this.c.beginPath();
                this.c.strokeStyle = T.nc(a.S);
                var c = b[a.fe];
                a = b[a.ge];
                null != c && null != a && (c = c.a, a = a.a, this.c.moveTo(c.x, c.y), this.c.lineTo(a.x, a.y), this.c.stroke())
            }
        }
        qr(a) {
            if (a.$a) {
                this.c.beginPath();
                this.c.strokeStyle = T.nc(a.S);
                var b = a.Y.a,
                    c = a.da.a;
                if (0 != 0 * a.wb) this.c.moveTo(b.x, b.y), this.c.lineTo(c.x, c.y);
                else {
                    a = a.ee;
                    let d = b.x - a.x;
                    b = b.y - a.y;
                    this.c.arc(a.x, a.y, Math.sqrt(d * d + b * b), Math.atan2(b, d), Math.atan2(c.y - a.y, c.x - a.x))
                }
                this.c.stroke()
            }
        }
        kr(a, b, c) {
            var d = a.M;
            if (null != d)
                for (d = d.ua.H[0], this.Fk(d.a,
                        d.S, b, c), d = 0, a = a.K; d < a.length;) {
                    let e = a[d];
                    ++d;
                    null != e.J && this.Fk(e.J.a, e.ea.S, b, c)
                }
        }
        Fk(a, b, c, d) {
            c = .5 * c - 25;
            var e = .5 * d - 25;
            null == e && (e = 0);
            null == c && (c = 0);
            d = c;
            c = e;
            var f = this.Xa;
            e = a.x - f.x;
            f = a.y - f.y;
            let g = -d,
                h = -c,
                k = this.Xa;
            d = k.x + (e > d ? d : e < g ? g : e);
            c = k.y + (f > c ? c : f < h ? h : f);
            e = a.x - d;
            a = a.y - c;
            900 < e * e + a * a && (this.c.fillStyle = "rgba(0,0,0,0.5)", this.Gk(d + 2, c + 2, Math.atan2(a, e)), this.c.fillStyle = T.nc(b), this.Gk(d - 2, c - 2, Math.atan2(a, e)))
        }
        Gk(a, b, c) {
            this.c.save();
            this.c.translate(a, b);
            this.c.rotate(c);
            this.c.beginPath();
            this.c.moveTo(15,
                0);
            this.c.lineTo(0, 7);
            this.c.lineTo(0, -7);
            this.c.closePath();
            this.c.fill();
            this.c.restore()
        }
        xr() {
            let a = this.md.values(),
                b = a.next();
            for (; !b.done;) {
                let c = b.value;
                b = a.next();
                c.kg = !1
            }
        }
        static nc(a) {
            return "rgba(" + [(a & 16711680) >>> 16, (a & 65280) >>> 8, a & 255].join() + ",255)"
        }
        static Qi(a, b) {
            a.imageSmoothingEnabled = b;
            a.mozImageSmoothingEnabled = b
        }
    }
    class Z {
        static Ts(a, b) {
            a = O.mj(a, b);
            return 8 < a && 14 > a ? !0 : 32 == a
        }
        static mt(a) {
            let b = a.length,
                c = 0;
            for (; c < b && Z.Ts(a, b - c - 1);) ++c;
            return 0 < c ? O.substr(a, 0, b - c) : a
        }
        static Lf(a) {
            var b;
            let c = "";
            for (b = 2 - a.length; c.length < b;) c += "0";
            return c + (null == a ? "null" : "" + a)
        }
        static replace(a, b, c) {
            return a.split(b).join(c)
        }
        static eh(a, b) {
            let c = "";
            do c = "0123456789ABCDEF".charAt(a & 15) + c, a >>>= 4; while (0 < a);
            if (null != b)
                for (; c.length < b;) c = "0" + c;
            return c
        }
    }
    class oc {
        constructor(a) {
            this.Lj = new Map;
            this.ap = new Eb(100, 16);
            this.Jg = !1;
            this.Ab = 0;
            this.qa = a;
            a = A.ia(8);
            a.u(Math.random());
            this.Se = a.Vb()
        }
        Ub(a, b) {
            null == b && (b = 0);
            this.qa.Ub(b, a)
        }
    }
    class Za {
        constructor(a, b) {
            this.f = x.Ha(Za.O);
            let c = x.Aa(this.f);
            this.Yp = c.get("ok");
            let d = this;
            this.Yp.onclick = function() {
                H.i(d.Va)
            };
            this.gm = c.get("replay");
            let e = null != b;
            this.gm.hidden = !e;
            e && (this.gm.onclick = function() {
                Ma.qm(b)
            });
            c.get("reason").textContent = a
        }
    }
    class Yb {
        constructor(a) {
            this.rd = null;
            this.dr = 1E4;
            this.Fd = !0;
            a.ik();
            this.Sa = a.Sa;
            this.cd = a.cd;
            this.xe = a.xe;
            this.rd = a.rd;
            this.Qm = window.performance.now();
            let b = null,
                c = this;
            b = function() {
                var e = c.dr - c.es();
                0 >= e ? c.ja() : (window.clearTimeout(c.Sm), e = window.setTimeout(b, e + 1E3), c.Sm = e)
            };
            b();
            this.Sa.oniceconnectionstatechange = function() {
                let e =
                    c.Sa.iceConnectionState;
                "closed" != e && "failed" != e || c.ja()
            };
            a = 0;
            let d = this.cd;
            for (; a < d.length;) {
                let e = d[a];
                ++a;
                e.onmessage = function(f) {
                    c.Fd && (c.Qm = window.performance.now(), null != c.xg && c.xg(f.data))
                };
                e.onclose = function() {
                    c.ja()
                }
            }
        }
        es() {
            return window.performance.now() - this.Qm
        }
        Ub(a, b) {
            if (this.Fd && (a = this.cd[a], "open" == a.readyState)) {
                b = b.Sg();
                try {
                    a.send(b)
                } catch (c) {
                    b = v.Lb(c).Gb(), pa.console.log(b)
                }
            }
        }
        ja() {
            window.clearTimeout(this.Sm);
            this.Fd && (this.Fd = !1, this.Sa.close(), null != this.qf && this.qf())
        }
    }
    class R {
        constructor() {
            this.w =
                32;
            this.h = 63;
            this.o = 1;
            this.Ua = 0;
            this.xa = new P(0, 0)
        }
        fa(a) {
            let b = this.xa;
            a.u(b.x);
            a.u(b.y);
            a.u(this.Ua);
            a.u(this.o);
            a.P(this.h);
            a.P(this.w)
        }
        ka(a) {
            let b = this.xa;
            b.x = a.v();
            b.y = a.v();
            this.Ua = a.v();
            this.o = a.v();
            this.h = a.N();
            this.w = a.N()
        }
    }
    class xa {
        constructor(a) {
            this.ol = this.nl = this.ql = null;
            this.hb = new qb;
            this.nd = !1;
            this.Gf = new yb;
            this.Oa = new bb;
            this.Wa = new xb(a);
            this.hb.Qb = a;
            this.f = x.Ha(xa.O);
            a = x.Aa(this.f);
            this.os = a.get("top-section");
            this.vf = a.get("popups");
            this.vf.style.display = "none";
            a.get("gameplay").appendChild(this.hb.f);
            x.replaceWith(a.get("chatbox"), this.Oa.f);
            x.replaceWith(a.get("stats"), this.Gf.f);
            this.ji = a.get("menu");
            let b = this;
            this.ji.onclick = function() {
                b.ue(!b.nd);
                b.ji.blur()
            };
            new pc(a.get("sound"));
            a.get("settings").onclick = function() {
                let c = new la;
                c.qb = function() {
                    b.cb(null)
                };
                b.cb(c.f)
            };
            this.Wa.ke = function() {
                let c = new Fb;
                c.qb = function(d) {
                    b.cb(null);
                    d && H.i(b.ke)
                };
                b.cb(c.f)
            };
            this.Wa.xq = function() {
                let c = new kb;
                c.ki = function() {
                    b.cb(null)
                };
                c.Ag = function(d) {
                    D.i(b.Ag, d);
                    b.cb(null)
                };
                c.ni = function(d) {
                    d = new ba("Error loading stadium",
                        d, ["Ok"]);
                    d.Va = function() {
                        b.cb(null)
                    };
                    b.cb(d.f)
                };
                b.cb(c.f)
            }
        }
        Mr(a) {
            this.ol != a && (this.ol = a, this.f.style.setProperty("--chat-opacity", "" + a))
        }
        Lr(a) {
            this.nl != a && (this.nl = a, this.f.classList.toggle("chat-bg-full", a))
        }
        Ur(a) {
            this.ql != a && (this.ql = a, this.hb.f.classList.toggle("restricted", a))
        }
        B(a) {
            null == a.U.M && this.ue(!0);
            this.nd && this.Wa.B(a.U, a.U.oa(a.xc));
            H.i(this.Rl);
            this.ji.disabled = null == a.U.M;
            let b = m.j.Ac.A(),
                c = this.hb.fb;
            c.re = m.j.Fi.A();
            this.Mr(m.j.Bh.A());
            this.Lr("full" == m.j.fk.A());
            this.Ur(0 == b);
            let d =
                this.Oa.f.getBoundingClientRect().height;
            0 == b ? (c.Gg = 1, c.Md = 0, c.Tg = 0, this.hb.fb.xh = 0, this.hb.f.style.paddingBottom = d + "px") : (c.Tg = 35, 0 >= b ? c.Md = 610 : (c.Md = 0, c.Gg = 1 + .25 * (b - 1)), this.hb.fb.xh = d * window.devicePixelRatio, this.hb.f.style.paddingBottom = "0");
            a = a.fg();
            this.hb.B(a);
            m.Na.nk.qt(a)
        }
        ue(a) {
            this.nd != a && (this.nd = a, this.f.classList.toggle("showing-room-view", this.nd), this.nd ? this.os.appendChild(this.Wa.f) : this.Wa.f.remove())
        }
        vp() {
            return null != xa.Kq
        }
        cb(a, b) {
            x.Nf(this.vf);
            xa.Kq = a;
            null != a ? (this.vf.style.display =
                "flex", this.vf.appendChild(a), this.Rl = b) : (this.vf.style.display = "none", this.Rl = null)
        }
    }
    class ub {
        constructor() {
            this.Df = null;
            this.f = x.Ha(ub.O);
            var a = x.Aa(this.f);
            let b = this;
            a.get("cancel").onclick = function() {
                H.i(b.qb)
            };
            this.zh = a.get("change");
            this.zh.disabled = !0;
            this.zh.onclick = function() {
                null != b.Df && b.rm(b.Df.index)
            };
            a = a.get("list");
            this.ti(a);
            let c = ib.fi(a);
            window.setTimeout(function() {
                c.update()
            }, 0)
        }
        ti(a) {
            let b = this,
                c = 0,
                d = Pa.bb.length >> 2;
            for (; c < d;) {
                var e = c++;
                let f = e,
                    g = Pa.bb[e << 2];
                e = Pa.bb[(e << 2) + 1].toLowerCase();
                let h = window.document.createElement("div");
                h.className = "elem";
                h.innerHTML = '<div class="flagico f-' + e + '"></div> ' + g;
                a.appendChild(h);
                h.onclick = function() {
                    null != b.Df && b.Df.Ja.classList.remove("selected");
                    b.zh.disabled = !1;
                    b.Df = {
                        Ja: h,
                        index: f
                    };
                    h.classList.add("selected")
                };
                h.ondblclick = function() {
                    b.rm(f)
                }
            }
        }
        rm(a) {
            let b = new ma;
            b.vb = Pa.bb[(a << 2) + 1].toLowerCase();
            b.Jc = Pa.bb[(a << 2) + 2];
            b.Mc = Pa.bb[(a << 2) + 3];
            m.j.Ye.ta(b);
            H.i(this.qb)
        }
    }
    class qc {
        constructor() {}
    }
    class la {
        constructor(a) {
            function b(y) {
                let F = window.document.createElement("div");
                F.className = "inputrow";
                var L = window.document.createElement("div");
                L.textContent = y;
                F.appendChild(L);
                L = Gb.Yo(y);
                let da = 0;
                for (; da < L.length;) {
                    let V = L[da];
                    ++da;
                    let rc = window.document.createElement("div");
                    var S = V;
                    V.startsWith("Key") && (S = O.substr(V, 3, null));
                    rc.textContent = S;
                    F.appendChild(rc);
                    S = window.document.createElement("i");
                    S.className = "icon-cancel";
                    S.onclick = function() {
                        Gb.ir(V);
                        m.j.me.ta(Gb);
                        rc.remove()
                    };
                    rc.appendChild(S)
                }
                L = window.document.createElement("i");
                L.className = "icon-plus";
                F.appendChild(L);
                L.onclick = function() {
                    sc.classList.toggle("show", !0);
                    sc.focus();
                    sc.onkeydown = function(V) {
                        sc.classList.toggle("show", !1);
                        V.stopPropagation();
                        V = V.code;
                        null == Gb.A(V) && (Gb.Ra(V, y), m.j.me.ta(Gb), Ec())
                    }
                };
                return F
            }

            function c(y, F, L) {
                y = l.get(y);
                if (null == L) y.hidden = !0;
                else {
                    y.innerHTML = F + ": <div class='flagico'></div> <span></span>";
                    F = y.querySelector(".flagico");
                    y = y.querySelector("span");
                    try {
                        F.classList.add("f-" + L.vb)
                    } catch (da) {}
                    y.textContent = L.vb.toUpperCase()
                }
            }

            function d() {
                let y = m.j.Ah.A();
                K.textContent = "" +
                    y;
                N.value = "" + y
            }

            function e() {
                let y = m.j.Bh.A();
                t.textContent = "" + y;
                z.value = "" + y
            }

            function f(y, F, L, da) {
                let S = l.get(y);
                y = F.A();
                S.selectedIndex = da(y);
                S.onchange = function() {
                    F.ta(L(S.selectedIndex))
                }
            }

            function g(y, F, L) {
                function da(V) {
                    S.classList.toggle("icon-ok", V);
                    S.classList.toggle("icon-cancel", !V)
                }
                y = l.get(y);
                y.classList.add("toggle");
                let S = window.document.createElement("i");
                S.classList.add("icon-ok");
                y.insertBefore(S, y.firstChild);
                y.onclick = function() {
                    let V = !F.A();
                    F.ta(V);
                    da(V);
                    null != L && L(V)
                };
                da(F.A())
            }

            function h(y) {
                let F = {
                    bn: l.get(y + "btn"),
                    lh: l.get(y + "sec")
                };
                n.push(F);
                F.bn.onclick = function() {
                    k(F)
                }
            }

            function k(y) {
                let F = 0,
                    L = 0;
                for (; L < n.length;) {
                    let da = n[L];
                    ++L;
                    let S = da == y;
                    S && (la.sm = F);
                    da.lh.classList.toggle("selected", S);
                    da.bn.classList.toggle("selected", S);
                    ++F
                }
            }
            null == a && (a = !1);
            this.f = x.Ha(la.O);
            let l = x.Aa(this.f);
            this.wd = l.get("close");
            let n = [];
            h("sound");
            h("video");
            h("misc");
            h("input");
            k(n[la.sm]);
            g("tsound-main", m.j.ve, function() {
                m.Na.zi()
            });
            g("tsound-chat", m.j.Ri);
            g("tsound-highlight", m.j.Hm);
            g("tsound-crowd", m.j.Gm);
            f("viewmode", m.j.Ac, function(y) {
                return y - 1
            }, function(y) {
                return y + 1
            });
            f("fps", m.j.Kh, function(y) {
                return y
            }, function(y) {
                return y
            });
            let r = [1, .75, .5, .25];
            f("resscale", m.j.Fi, function(y) {
                return r[y]
            }, function(y) {
                let F = 0,
                    L = r.length - 1;
                for (; F < L && !(r[F] <= y);) ++F;
                return F
            });
            g("tvideo-lowlatency", m.j.di);
            g("tvideo-teamcol", m.j.Pm);
            g("tvideo-showindicators", m.j.Rk);
            g("tvideo-showavatars", m.j.Em);
            let t = l.get("chatopacity-value"),
                z = l.get("chatopacity-range");
            e();
            z.oninput = function() {
                m.j.Bh.ta(parseFloat(z.value));
                e()
            };
            let K = l.get("chatfocusheight-value"),
                N = l.get("chatfocusheight-range");
            d();
            N.oninput = function() {
                m.j.Ah.ta(Q.parseInt(N.value));
                d()
            };
            f("chatbgmode", m.j.fk, function(y) {
                return 0 == y ? "full" : "compact"
            }, function(y) {
                return "full" == y ? 0 : 1
            });
            let Hb = null,
                Jc = this;
            Hb = function() {
                let y = m.j.Ye.A();
                c("loc", "Detected location", m.j.Xe.A());
                c("loc-ovr", "Location override", y);
                let F = l.get("loc-ovr-btn");
                F.disabled = !a;
                null == y ? (F.textContent = "Override location", F.onclick = function() {
                    H.i(Jc.cq)
                }) : (F.textContent = "Remove override",
                    F.onclick = function() {
                        m.j.Ye.ta(null);
                        Hb()
                    })
            };
            Hb();
            let Gb = m.j.me.A(),
                sc = l.get("presskey"),
                Ec = null,
                cb = l.get("inputsec");
            Ec = function() {
                x.Nf(cb);
                cb.appendChild(b("Up"));
                cb.appendChild(b("Down"));
                cb.appendChild(b("Left"));
                cb.appendChild(b("Right"));
                cb.appendChild(b("Kick"));
                cb.appendChild(b("ToggleChat"))
            };
            Ec();
            this.wd.onclick = function() {
                H.i(Jc.qb)
            }
        }
    }
    class sa {
        constructor() {
            this.jc = -1;
            this.ic = null;
            this.Cl = 0;
            this.h = this.w = 63;
            this.$j = 0;
            this.S = 16777215;
            this.Da = .99;
            this.ba = 1;
            this.o = .5;
            this.V = 10;
            this.pa = new P(0,
                0);
            this.G = new P(0, 0);
            this.a = new P(0, 0)
        }
        fa(a) {
            var b = this.a;
            a.u(b.x);
            a.u(b.y);
            b = this.G;
            a.u(b.x);
            a.u(b.y);
            b = this.pa;
            a.u(b.x);
            a.u(b.y);
            a.u(this.V);
            a.u(this.o);
            a.u(this.ba);
            a.u(this.Da);
            a.ub(this.S);
            a.P(this.h);
            a.P(this.w)
        }
        ka(a) {
            var b = this.a;
            b.x = a.v();
            b.y = a.v();
            b = this.G;
            b.x = a.v();
            b.y = a.v();
            b = this.pa;
            b.x = a.v();
            b.y = a.v();
            this.V = a.v();
            this.o = a.v();
            this.ba = a.v();
            this.Da = a.v();
            this.S = a.ib();
            this.h = a.N();
            this.w = a.N()
        }
        ko(a) {
            var b = this.a,
                c = a.a,
                d = b.x - c.x;
            b = b.y - c.y;
            var e = a.V + this.V,
                f = d * d + b * b;
            if (0 < f && f <= e * e) {
                f = Math.sqrt(f);
                d /= f;
                b /= f;
                c = this.ba / (this.ba + a.ba);
                e -= f;
                f = e * c;
                var g = this.a,
                    h = this.a;
                g.x = h.x + d * f;
                g.y = h.y + b * f;
                h = g = a.a;
                e -= f;
                g.x = h.x - d * e;
                g.y = h.y - b * e;
                e = this.G;
                f = a.G;
                e = d * (e.x - f.x) + b * (e.y - f.y);
                0 > e && (e *= this.o * a.o + 1, c *= e, g = f = this.G, f.x = g.x - d * c, f.y = g.y - b * c, a = f = a.G, c = e - c, f.x = a.x + d * c, f.y = a.y + b * c)
            }
        }
        lo(a) {
            if (0 != 0 * a.wb) {
                var b = a.Y.a;
                var c = a.da.a;
                var d = c.x - b.x;
                var e = c.y - b.y,
                    f = this.a;
                var g = f.x - c.x;
                c = f.y - c.y;
                f = this.a;
                if (0 >= (f.x - b.x) * d + (f.y - b.y) * e || 0 <= g * d + c * e) return;
                d = a.xa;
                b = d.x;
                d = d.y;
                g = b * g + d * c
            } else {
                d = a.ee;
                g = this.a;
                b = g.x - d.x;
                d = g.y -
                    d.y;
                g = a.Pg;
                c = a.Qg;
                if ((0 < g.x * b + g.y * d && 0 < c.x * b + c.y * d) == 0 >= a.wb) return;
                c = Math.sqrt(b * b + d * d);
                if (0 == c) return;
                g = c - a.pk;
                b /= c;
                d /= c
            }
            c = a.Hc;
            if (0 == c) 0 > g && (g = -g, b = -b, d = -d);
            else if (0 > c && (c = -c, g = -g, b = -b, d = -d), g < -c) return;
            g >= this.V || (g = this.V - g, e = c = this.a, c.x = e.x + b * g, c.y = e.y + d * g, g = this.G, g = b * g.x + d * g.y, 0 > g && (g *= this.o * a.o + 1, c = a = this.G, a.x = c.x - b * g, a.y = c.y - d * g))
        }
        uc() {
            let a = wa.Cc,
                b = this.ic;
            this.jc != a && (null == b && (this.ic = b = new sa), this.jc = a, sa.zd(b, this));
            return b
        }
        static zd(a, b) {
            a.V = b.V;
            a.o = b.o;
            a.ba = b.ba;
            a.Da = b.Da;
            a.S =
                b.S;
            a.$j = b.$j;
            a.h = b.h;
            a.w = b.w;
            var c = a.a,
                d = b.a;
            c.x = d.x;
            c.y = d.y;
            c = a.G;
            d = b.G;
            c.x = d.x;
            c.y = d.y;
            a = a.pa;
            b = b.pa;
            a.x = b.x;
            a.y = b.y
        }
    }
    class tc {
        static i(a, b, c, d) {
            null != a && a(b, c, d)
        }
    }
    class Zb {
        constructor(a, b) {
            this.Vh = null;
            this.l = a;
            null != b && (this.Vh = "@" + Z.replace(b, " ", "_"))
        }
        dj(a) {
            let b = this.l.Oa.Fc,
                c = [],
                d = 0;
            for (a = a.K; d < a.length;) {
                let e = a[d];
                ++d;
                c.push({
                    D: e.D,
                    aa: e.X
                })
            }
            b.Vj = c
        }
        Ai(a) {
            function b(d) {
                return null == d ? "" : " by " + d.D
            }
            this.dj(a);
            let c = this;
            a.Ml = function(d) {
                c.l.Oa.Ib("" + d.D + " has joined");
                m.Na.ld(m.Na.wp);
                c.dj(a)
            };
            a.Nl = function(d, e, f, g) {
                D.i(c.oq, d.X);
                null == e ? d = "" + d.D + " has left" : (Nb.i(c.nq, d.X, e, null != g ? g.D : null, f), d = "" + d.D + " was " + (f ? "banned" : "kicked") + b(g) + ("" != e ? " (" + e + ")" : ""));
                c.l.Oa.Ib(d);
                m.Na.ld(m.Na.Cp);
                c.dj(a)
            };
            a.Kl = function(d, e) {
                let f = null != c.Vh && -1 != e.indexOf(c.Vh);
                c.l.Oa.ca("" + d.D + ": " + e, f ? "highlight" : null);
                m.j.Hm.A() && f ? m.Na.ld(m.Na.Qk) : m.j.Ri.A() && m.Na.ld(m.Na.ek)
            };
            a.nm = function(d, e, f, g) {
                c.l.Oa.Np(d, e, f);
                if (m.j.Ri.A()) switch (g) {
                    case 1:
                        m.Na.ld(m.Na.ek);
                        break;
                    case 2:
                        m.Na.ld(m.Na.Qk)
                }
            };
            a.si = function() {
                m.Na.ld(m.Na.yp)
            };
            a.Yi = function(d) {
                m.Na.ld(m.Na.bp);
                let e = c.l.hb.fb.Cd;
                e.Ra(d == u.ga ? e.er : e.Vn)
            };
            a.Zi = function(d) {
                let e = c.l.hb.fb.Cd;
                e.Ra(d == u.ga ? e.fr : e.Wn);
                c.l.Oa.Ib("" + d.D + " team won the match")
            };
            a.Fl = function(d, e, f) {
                e && !f && c.l.Oa.Ib("Game paused" + b(d))
            };
            a.$i = function() {
                let d = c.l.hb.fb.Cd;
                d.Ra(d.ds)
            };
            a.Vi = function(d) {
                c.l.ue(!1);
                c.l.hb.fb.Cd.io();
                c.l.Oa.Ib("Game started" + b(d))
            };
            a.Hf = function(d) {
                null != d && c.l.Oa.Ib("Game stopped" + b(d))
            };
            a.Ti = function(d, e) {
                if (!e.af()) {
                    let f = Z.eh(e.hk(), 8);
                    c.l.Oa.Ib('Stadium "' + e.D + '" (' +
                        f + ") loaded" + b(d))
                }
            };
            a.Ll = function(d) {
                c.l.Oa.Ib("" + d.D + " " + (d.Td ? "has desynchronized" : "is back in sync"))
            };
            a.Ql = function(d, e, f) {
                null != a.M && c.l.Oa.Ib("" + e.D + " was moved to " + f.D + b(d))
            };
            a.ri = function(d, e) {
                let f = e.D;
                d = (e.eb ? "" + f + " was given admin rights" : "" + f + "'s admin rights were taken away") + b(d);
                c.l.Oa.Ib(d)
            };
            a.Pl = function(d, e) {
                c.l.hb.fb.jp(d, e)
            };
            a.Xk = function(d, e, f, g) {
                c.l.Oa.Ib("Kick Rate Limit set to (min: " + e + ", rate: " + f + ", burst: " + g + ")" + b(d))
            }
        }
        rs(a) {
            a.Ml = null;
            a.Nl = null;
            a.Kl = null;
            a.nm = null;
            a.si =
                null;
            a.Yi = null;
            a.Zi = null;
            a.Fl = null;
            a.$i = null;
            a.Vi = null;
            a.Hf = null;
            a.Ti = null;
            a.Ll = null;
            a.Ql = null;
            a.ri = null;
            a.Pl = null;
            a.Xk = null
        }
    }
    class db {
        constructor(a, b, c) {
            this.rd = this.ze = null;
            this.xe = [];
            this.sk = 0;
            this.Al = !1;
            this.hg = [];
            this.cd = [];
            this.Sa = new RTCPeerConnection({
                iceServers: b
            }, db.to);
            let d = this;
            this.Wh = new Promise(function(e) {
                d.pp = e
            });
            this.Sa.onicecandidate = function(e) {
                null == e.candidate ? d.pp(d.hg) : (e = e.candidate, null != e.candidate && "" != e.candidate && (null != d.vg && d.vg(e), d.hg.push(e)))
            };
            for (b = 0; b < c.length;) this.yo(c[b++]);
            this.aa = a
        }
        Xi(a) {
            null == a && (a = 1E4);
            window.clearTimeout(this.ze);
            this.ze = window.setTimeout(M(this, this.np), a)
        }
        xo(a, b) {
            let c = this;
            this.uk(this.Sa.setRemoteDescription(a).then(function() {
                return c.Sa.createAnswer()
            }), b, 500)
        }
        zo() {
            this.uk(this.Sa.createOffer(), [], 1E3)
        }
        uk(a, b, c) {
            let d = this;
            a.then(function(e) {
                return d.Sa.setLocalDescription(e).then(function() {
                    return e
                })
            }).then(function(e) {
                function f() {
                    return e
                }
                let g = 0;
                for (; g < b.length;) d.Mj(b[g++]);
                return Ic.gs(d.Wh, c).then(f, f)
            }).then(function(e) {
                d.li(e)
            }).catch(function() {
                d.gg()
            })
        }
        yo(a) {
            let b = {
                id: this.cd.length,
                negotiated: !0,
                ordered: a.ordered
            };
            a.reliable || (b.maxRetransmits = 0);
            a = this.Sa.createDataChannel(a.name, b);
            a.binaryType = "arraybuffer";
            let c = this;
            a.onopen = function() {
                let d = 0,
                    e = c.cd;
                for (; d < e.length;)
                    if ("open" != e[d++].readyState) return;
                null != c.Id && c.Id()
            };
            a.onclose = function() {
                c.gg()
            };
            a.onmessage = function() {
                c.gg()
            };
            this.cd.push(a)
        }
        Mj(a) {
            let b = this;
            window.setTimeout(function() {
                b.Sa.addIceCandidate(a)
            }, this.sk)
        }
        np() {
            this.gg()
        }
        gg() {
            null != this.kd && this.kd();
            this.ja()
        }
        ja() {
            this.ik();
            this.Sa.close()
        }
        ik() {
            window.clearTimeout(this.ze);
            this.li = this.Id = this.vg = this.kd = null;
            this.Sa.onicecandidate = null;
            this.Sa.ondatachannel = null;
            this.Sa.onsignalingstatechange = null;
            this.Sa.oniceconnectionstatechange = null;
            let a = 0,
                b = this.cd;
            for (; a < b.length;) {
                let c = b[a];
                ++a;
                c.onopen = null;
                c.onclose = null;
                c.onmessage = null
            }
        }
    }
    class uc {}
    class $a {
        constructor(a) {
            function b(g, h) {
                function k() {
                    l.className = n.He ? "icon-ok" : "icon-cancel"
                }
                g = c.get(g);
                let l = g.querySelector("i"),
                    n = {
                        He: h
                    };
                k();
                g.onclick = function() {
                    n.He = !n.He;
                    k();
                    e.un(e.oj)
                };
                return n
            }
            this.oj = [];
            this.Ps = a;
            this.Ja =
                x.Ha($a.Cj);
            let c = x.Aa(this.Ja),
                d = new gb(c);
            this.yj = c.get("refresh");
            this.ln = c.get("join");
            a = c.get("create");
            this.Ks = c.get("count");
            let e = this;
            a.onclick = function() {
                H.i(e.ct)
            };
            c.get("changenick").onclick = function() {
                H.i(e.bt)
            };
            c.get("settings").onclick = function() {
                H.i(e.et)
            };
            let f = c.get("replayfile");
            f.onchange = function() {
                var g = f.files;
                if (!(1 > g.length)) {
                    g = g.item(0);
                    var h = new FileReader;
                    h.onload = function() {
                        D.i(e.dt, h.result)
                    };
                    h.readAsArrayBuffer(g)
                }
            };
            this.Os = b("fil-full", !0);
            this.ft = b("fil-pass", !0);
            this.Ns = b("fil-empty", !0);
            this.Vs = c.get("listscroll");
            this.ht = ib.fi(this.Vs);
            this.rj = c.get("list");
            this.yj.onclick = function() {
                d.bm();
                e.fn()
            };
            this.ln.onclick = function() {
                null != e.Wd && D.i(e.qn, e.Wd.lt)
            };
            this.fn()
        }
        fn() {
            function a() {
                d.yj.disabled = !1;
                d.un(b);
                return null
            }
            this.xn(null);
            this.yj.disabled = !0;
            x.Nf(this.rj);
            let b = [];
            this.oj = [];
            let c = $b.get().then(function(e) {
                    return b = e
                }, function() {
                    return null
                }),
                d = this;
            $a.gt(c).then(a, a)
        }
        un(a) {
            this.oj = a;
            $b.nt(this.Ps, a);
            a.sort(function(k, l) {
                return k.We - l.We
            });
            x.Nf(this.rj);
            let b = 0,
                c = 0,
                d = !this.Os.He,
                e = !this.ft.He,
                f = !this.Ns.He,
                g = this,
                h = 0;
            for (; h < a.length;) {
                let k = a[h];
                ++h;
                let l = k.Ed;
                if (d && l.K >= l.jf) continue;
                if (e && l.Kb) continue;
                if (f && 0 == l.K) continue;
                let n = new Bb(k);
                n.Ja.ondblclick = function() {
                    D.i(g.qn, k)
                };
                n.Ja.onclick = function() {
                    g.xn(n)
                };
                this.rj.appendChild(n.Ja);
                b += l.K;
                ++c
            }
            this.Ks.textContent = "" + b + " players in " + c + " rooms";
            this.ht.update()
        }
        xn(a) {
            null != this.Wd && this.Wd.Ja.classList.remove("selected");
            this.Wd = a;
            null != this.Wd && this.Wd.Ja.classList.add("selected");
            this.ln.disabled =
                null == this.Wd
        }
        static gt(a) {
            let b = new Promise(function(c, d) {
                window.setTimeout(function() {
                    d(null)
                }, 5E3)
            });
            return Promise.race([b, a])
        }
    }
    class vb {
        constructor() {
            this.f = x.Ha(vb.O);
            let a = x.Aa(this.f);
            this.Eb = a.get("input");
            this.nf = a.get("ok");
            let b = this;
            a.get("cancel").onclick = function() {
                null != b.Va && b.Va(null)
            };
            this.Eb.maxLength = 30;
            this.Eb.oninput = function() {
                b.B()
            };
            this.Eb.onkeydown = function(c) {
                13 == c.keyCode && b.Ic() && null != b.Va && b.Va(b.Eb.value)
            };
            this.nf.onclick = function() {
                b.Ic() && null != b.Va && b.Va(b.Eb.value)
            };
            this.B()
        }
        Ic() {
            let a = this.Eb.value;
            return 30 >= a.length ? 0 < a.length : !1
        }
        B() {
            this.nf.disabled = !this.Ic()
        }
    }
    class Tb {
        constructor(a) {
            this.Rd = a
        }
    }
    class lb {
        static delete(a) {
            return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(b, c) {
                let d = window.indexedDB.open("stadiums", 1);
                d.onblocked = d.onerror = c;
                d.onupgradeneeded = function(e) {
                    let f = d.result;
                    f.onerror = c;
                    1 > e.oldVersion && (f.createObjectStore("files", {
                        autoIncrement: !0
                    }), f.createObjectStore("meta", {
                        keyPath: "id"
                    }))
                };
                d.onsuccess = function() {
                    let e = d.result;
                    e.onerror = c;
                    let f = e.transaction(["meta", "files"], "readwrite");
                    f.onerror = f.onabort = function(g) {
                        c(g);
                        e.close()
                    };
                    f.oncomplete = function() {
                        b(0);
                        e.close()
                    };
                    f.objectStore("files").delete(a);
                    f.objectStore("meta").delete(a)
                }
            })
        }
        static get(a) {
            return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(b, c) {
                let d = window.indexedDB.open("stadiums", 1);
                d.onblocked = d.onerror = c;
                d.onupgradeneeded = function(e) {
                    let f = d.result;
                    f.onerror =
                        c;
                    1 > e.oldVersion && (f.createObjectStore("files", {
                        autoIncrement: !0
                    }), f.createObjectStore("meta", {
                        keyPath: "id"
                    }))
                };
                d.onsuccess = function() {
                    let e = d.result;
                    e.onerror = c;
                    let f = e.transaction(["files"]);
                    f.onerror = f.onabort = function(g) {
                        c(g);
                        e.close()
                    };
                    f.oncomplete = function() {
                        e.close()
                    };
                    Xb.nh(f.objectStore("files").get(a)).then(function(g) {
                        try {
                            let h = new q;
                            h.al(g);
                            b(h)
                        } catch (h) {
                            g = v.Lb(h).Gb(), c(g)
                        }
                    }, c)
                }
            })
        }
        static getAll() {
            return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(a,
                b) {
                let c = window.indexedDB.open("stadiums", 1);
                c.onblocked = c.onerror = b;
                c.onupgradeneeded = function(d) {
                    let e = c.result;
                    e.onerror = b;
                    1 > d.oldVersion && (e.createObjectStore("files", {
                        autoIncrement: !0
                    }), e.createObjectStore("meta", {
                        keyPath: "id"
                    }))
                };
                c.onsuccess = function() {
                    let d = c.result;
                    d.onerror = b;
                    let e = d.transaction(["meta"]);
                    e.onerror = e.onabort = function(f) {
                        b(f);
                        d.close()
                    };
                    e.oncomplete = function() {
                        d.close()
                    };
                    Xb.nh(e.objectStore("meta").getAll()).then(a, b)
                }
            })
        }
        static kt() {
            let a = pa.navigator.storage;
            if (null == a ||
                null == a.persist) return Promise.resolve(!1);
            try {
                return a.persisted().then(function(b) {
                    return b ? !0 : a.persist()
                }).catch(function() {
                    return !1
                })
            } catch (b) {
                return Promise.resolve(!1)
            }
        }
        static add(a) {
            return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(b, c) {
                let d = window.indexedDB.open("stadiums", 1);
                d.onblocked = d.onerror = c;
                d.onupgradeneeded = function(e) {
                    let f = d.result;
                    f.onerror = c;
                    1 > e.oldVersion && (f.createObjectStore("files", {
                        autoIncrement: !0
                    }), f.createObjectStore("meta", {
                        keyPath: "id"
                    }))
                };
                d.onsuccess = function() {
                    let e = d.result;
                    e.onerror = c;
                    let f = e.transaction(["files", "meta"], "readwrite");
                    f.onerror = f.onabort = function(g) {
                        c(g);
                        e.close()
                    };
                    f.oncomplete = function() {
                        b(0);
                        e.close()
                    };
                    try {
                        Xb.nh(f.objectStore("files").add(a.Ae())).then(function(g) {
                            g = {
                                name: a.D,
                                id: g
                            };
                            return Xb.nh(f.objectStore("meta").add(g))
                        }).catch(c)
                    } catch (g) {
                        c(0)
                    }
                }
            })
        }
    }
    class Ib {
        constructor(a) {
            this.f = x.Ha(Ib.O);
            let b = x.Aa(this.f);
            this.lf = b.get("title");
            this.xi = b.get("reason");
            this.Qn = b.get("ban-btn");
            this.Sn =
                b.get("ban-text");
            this.bf = b.get("kick");
            this.wd = b.get("close");
            let c = this;
            this.Qn.onclick = function() {
                c.Oj(!c.Xj)
            };
            this.wd.onclick = function() {
                H.i(c.qb)
            };
            this.bf.onclick = function() {
                tc.i(c.mi, c.Qb, c.xi.value, c.Xj)
            };
            this.xi.onkeydown = function(d) {
                return d.stopPropagation()
            };
            this.xi.maxLength = 100;
            this.Qb = a.X;
            this.lf.textContent = "Kick " + a.D;
            this.Oj(!1)
        }
        Oj(a) {
            this.Xj = a;
            this.Sn.textContent = a ? "Yes" : "No"
        }
    }
    class Dc {
        static dn(a) {
            let b = [];
            if (null != a) {
                let d = Object.prototype.hasOwnProperty;
                for (var c in a) "__id__" !=
                    c && "hx__closures__" != c && d.call(a, c) && b.push(c)
            }
            return b
        }
    }
    class ta {
        constructor() {
            this.jc = -1;
            this.T = this.ic = null;
            this.Hd = 2;
            this.gd = 0;
            this.je = 1;
            this.jb = this.Fa = 3;
            this.Wc = !1;
            this.M = null;
            this.K = [];
            this.lc = "";
            this.T = q.Oh()[0];
            this.lb = [null, new va, new va];
            this.lb[1].gb.push(u.ga.S);
            this.lb[2].gb.push(u.Ca.S)
        }
        bs(a) {
            if (null == this.M) {
                this.M = new ca;
                for (var b = 0, c = this.K; b < c.length;) {
                    let d = c[b];
                    ++b;
                    d.J = null;
                    d.Mb = 0
                }
                this.M.rp(this);
                null != this.Vi && this.Vi(a)
            }
        }
        Zf(a, b, c) {
            if (b.ea != c) {
                b.ea = c;
                O.remove(this.K, b);
                this.K.push(b);
                if (null != this.M) {
                    null != b.J && (O.remove(this.M.ua.H, b.J), b.J = null);
                    this.M.Tk(b);
                    let d = 0,
                        e = !1;
                    for (; !e;) {
                        ++d;
                        e = !0;
                        let f = 0,
                            g = this.K;
                        for (; f < g.length;) {
                            let h = g[f];
                            ++f;
                            if (h != b && h.ea == b.ea && h.Mb == d) {
                                e = !1;
                                break
                            }
                        }
                    }
                    b.Mb = d
                }
                tc.i(this.Ql, a, b, c)
            }
        }
        oa(a) {
            let b = 0,
                c = this.K;
            for (; b < c.length;) {
                let d = c[b];
                ++b;
                if (d.X == a) return d
            }
            return null
        }
        B(a) {
            null != this.M && this.M.B(a)
        }
        fa(a) {
            a.Fb(this.lc);
            a.m(this.Wc ? 1 : 0);
            a.P(this.jb);
            a.P(this.Fa);
            a.hj(this.je);
            a.m(this.gd);
            a.m(this.Hd);
            this.T.fa(a);
            a.m(null != this.M ? 1 : 0);
            null != this.M &&
                this.M.fa(a);
            a.m(this.K.length);
            let b = 0,
                c = this.K;
            for (; b < c.length;) c[b++].va(a);
            this.lb[1].fa(a);
            this.lb[2].fa(a)
        }
        ka(a) {
            this.lc = a.Bb();
            this.Wc = 0 != a.F();
            this.jb = a.N();
            this.Fa = a.N();
            this.je = a.wi();
            this.gd = a.F();
            this.Hd = a.F();
            this.T = q.ka(a);
            var b = 0 != a.F();
            this.M = null;
            b && (this.M = new ca, this.M.ka(a, this));
            b = null == this.M ? null : this.M.ua.H;
            let c = a.F();
            for (var d = this.K; d.length > c;) d.pop();
            for (d = 0; d < c;) {
                let e = new ua;
                e.wa(a, b);
                this.K[d++] = e
            }
            this.lb[1].ka(a);
            this.lb[2].ka(a)
        }
        Lk() {
            let a = 0;
            var b = A.ia();
            this.fa(b);
            for (b = b.ks(); 4 <= b.s.byteLength - b.a;) a ^= b.N();
            return a
        }
        Uo() {
            let a = A.ia(4);
            a.P(this.Lk());
            return a.Sg()
        }
        no(a) {
            a = (new J(new DataView(a))).N();
            D.i(this.Eo, this.Lk() != a)
        }
        Cm(a) {
            this.hm = a
        }
        Ob(a) {
            if (0 == a) return !0;
            a = this.oa(a);
            return null != a && a.eb ? !0 : !1
        }
        Pr(a, b, c, d) {
            this.Hd = 0 > b ? 0 : 255 < b ? 255 : b;
            this.gd = 0 > c ? 0 : 255 < c ? 255 : c;
            0 > d ? d = 0 : 100 < d && (d = 100);
            this.je = this.gd * d;
            Nb.i(this.Xk, a, this.Hd, this.gd, d)
        }
        uc() {
            let a = wa.Cc,
                b = this.ic;
            this.jc != a && (null == b && (this.ic = b = new ta), this.jc = a, ta.zd(b, this));
            return b
        }
        static zd(a, b) {
            a.lc =
                b.lc;
            if (null == b.K) a.K = null;
            else {
                null == a.K && (a.K = []);
                let d = a.K,
                    e = b.K;
                for (var c = e.length; d.length > c;) d.pop();
                c = 0;
                let f = e.length;
                for (; c < f;) {
                    let g = c++;
                    d[g] = e[g].Qs()
                }
            }
            a.M = null == b.M ? null : b.M.uc();
            a.Wc = b.Wc;
            a.jb = b.jb;
            a.Fa = b.Fa;
            a.je = b.je;
            a.gd = b.gd;
            a.Hd = b.Hd;
            a.T = b.T;
            a.lb = b.lb
        }
    }
    class mc {
        constructor(a, b) {
            this.r = new RegExp(a, b.split("u").join(""))
        }
        match(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.pc = this.r.exec(a);
            this.r.lh = a;
            return null != this.r.pc
        }
        on(a) {
            if (null != this.r.pc && 0 <= a && a < this.r.pc.length) return this.r.pc[a];
            throw v.C("EReg::matched");
        }
        Xs() {
            if (null == this.r.pc) throw v.C("No string matched");
            return {
                wj: this.r.pc.index,
                Us: this.r.pc[0].length
            }
        }
        Ws(a, b) {
            var c;
            null == c && (c = -1);
            if (this.r.global) {
                this.r.lastIndex = b;
                this.r.pc = this.r.exec(0 > c ? a : O.substr(a, 0, b + c));
                if (b = null != this.r.pc) this.r.lh = a;
                return b
            }
            if (c = this.match(0 > c ? O.substr(a, b, null) : O.substr(a, b, c))) this.r.lh = a, this.r.pc.index += b;
            return c
        }
    }
    class vc {
        constructor() {}
    }
    class Eb {
        constructor(a, b) {
            this.ak = a;
            this.cj = b;
            this.qc = a;
            this.gf = window.performance.now()
        }
        Um() {
            var a;
            null == a && (a = 1);
            this.B();
            return a <= this.qc ? (this.qc -= a, !0) : !1
        }
        fs() {
            this.B();
            let a = 1 - this.qc;
            if (0 >= a) return 0;
            let b = window.performance.now();
            return this.gf + a * this.cj - b
        }
        uo(a) {
            let b = this.fs();
            --this.qc;
            window.setTimeout(a, b | 0)
        }
        B() {
            let a = window.performance.now(),
                b = Math.floor((a - this.gf) / this.cj);
            this.gf += b * this.cj;
            this.qc += b;
            this.qc >= this.ak && (this.qc = this.ak, this.gf = a)
        }
    }
    class Jb {
        constructor() {
            this.yk = null;
            this.f = x.Ha(Jb.O);
            var a = x.Aa(this.f);
            this.mg = a.get("link");
            let b = a.get("copy");
            a = a.get("close");
            let c = this;
            this.mg.onfocus = function() {
                c.mg.select()
            };
            b.onclick = function() {
                c.mg.select();
                return window.document.execCommand("Copy")
            };
            a.onclick = function() {
                H.i(c.qb)
            }
        }
        Qr(a) {
            this.yk != a && (this.yk = a, this.mg.value = a)
        }
    }
    class Fc {
        constructor(a) {
            this.current = 0;
            this.Es = a
        }
        next() {
            return this.Es[this.current++]
        }
    }
    class wc {
        constructor(a) {
            function b(d) {
                return new Promise(function(e) {
                    let f = a.file(d).asArrayBuffer();
                    c.c.decodeAudioData(f, e, function() {
                        e(null)
                    })
                })
            }
            this.c = new AudioContext;
            this.og = this.c.createGain();
            this.zi();
            this.og.connect(this.c.destination);
            let c = this;
            this.Lo = Promise.all([b("sounds/chat.ogg").then(function(d) {
                return c.ek = d
            }), b("sounds/highlight.wav").then(function(d) {
                return c.Qk = d
            }), b("sounds/kick.ogg").then(function(d) {
                return c.yp = d
            }), b("sounds/goal.ogg").then(function(d) {
                return c.bp = d
            }), b("sounds/join.ogg").then(function(d) {
                return c.wp = d
            }), b("sounds/leave.ogg").then(function(d) {
                return c.Cp = d
            }), b("sounds/crowd.ogg").then(function(d) {
                c.Bo = d;
                c.nk = new xc(c.Bo, c.c);
                c.nk.connect(c.og)
            })])
        }
        lm() {
            this.c.resume()
        }
        ld(a) {
            let b =
                this.c.createBufferSource();
            b.buffer = a;
            b.connect(this.og);
            b.start()
        }
        zi() {
            let a = m.j.Si.A();
            m.j.ve.A() || (a = 0);
            this.og.gain.value = a
        }
    }
    class ab {
        constructor() {
            this.jc = -1;
            this.ic = null;
            this.H = []
        }
        fa(a) {
            a.m(this.H.length);
            let b = 0,
                c = this.H.length;
            for (; b < c;) {
                let d = b++,
                    e = this.H[d];
                e.Cl = d;
                e.fa(a)
            }
        }
        ka(a) {
            this.H = [];
            let b = a.F(),
                c = 0;
            for (; c < b;) {
                ++c;
                let d = new sa;
                d.ka(a);
                this.H.push(d)
            }
        }
        B(a) {
            for (var b = 0, c = this.H; b < c.length;) {
                var d = c[b];
                ++b;
                var e = d.a,
                    f = d.a,
                    g = d.G;
                e.x = f.x + g.x * a;
                e.y = f.y + g.y * a;
                f = e = d.G;
                g = d.pa;
                d = d.Da;
                e.x = (f.x +
                    g.x) * d;
                e.y = (f.y + g.y) * d
            }
            a = 0;
            for (b = this.H.length; a < b;) {
                d = a++;
                c = this.H[d];
                d += 1;
                for (e = this.H.length; d < e;) f = this.H[d++], 0 != (f.h & c.w) && 0 != (f.w & c.h) && c.ko(f);
                if (0 != c.ba) {
                    d = 0;
                    for (e = this.ra; d < e.length;)
                        if (f = e[d], ++d, 0 != (f.h & c.w) && 0 != (f.w & c.h)) {
                            g = f.xa;
                            var h = c.a;
                            g = f.Ua - (g.x * h.x + g.y * h.y) + c.V;
                            if (0 < g) {
                                var k = h = c.a,
                                    l = f.xa;
                                h.x = k.x + l.x * g;
                                h.y = k.y + l.y * g;
                                g = c.G;
                                h = f.xa;
                                g = g.x * h.x + g.y * h.y;
                                0 > g && (g *= c.o * f.o + 1, k = h = c.G, f = f.xa, h.x = k.x - f.x * g, h.y = k.y - f.y * g)
                            }
                        } d = 0;
                    for (e = this.W; d < e.length;) f = e[d], ++d, 0 != (f.h & c.w) && 0 != (f.w & c.h) && c.lo(f);
                    d = 0;
                    for (e = this.L; d < e.length;)
                        if (f = e[d], ++d, 0 != (f.h & c.w) && 0 != (f.w & c.h) && (h = c.a, k = f.a, g = h.x - k.x, h = h.y - k.y, k = g * g + h * h, 0 < k && k <= c.V * c.V)) {
                            k = Math.sqrt(k);
                            g /= k;
                            h /= k;
                            k = c.V - k;
                            let n = l = c.a;
                            l.x = n.x + g * k;
                            l.y = n.y + h * k;
                            k = c.G;
                            k = g * k.x + h * k.y;
                            0 > k && (k *= c.o * f.o + 1, l = f = c.G, f.x = l.x - g * k, f.y = l.y - h * k)
                        }
                }
            }
            for (a = 0; 2 > a;)
                for (++a, b = 0, c = this.pb; b < c.length;) c[b++].B(this.H)
        }
        uc() {
            let a = wa.Cc,
                b = this.ic;
            this.jc != a && (null == b && (this.ic = b = new ab), this.jc = a, ab.zd(b, this));
            return b
        }
        static zd(a, b) {
            if (null == b.H) a.H = null;
            else {
                null == a.H && (a.H = []);
                let d = a.H,
                    e = b.H;
                for (var c = e.length; d.length > c;) d.pop();
                c = 0;
                let f = e.length;
                for (; c < f;) {
                    let g = c++;
                    d[g] = e[g].uc()
                }
            }
            a.L = b.L;
            a.W = b.W;
            a.ra = b.ra;
            a.pb = b.pb
        }
    }
    class Kb {
        static Ep() {
            if (null != Kb.ui) return Kb.ui;
            Kb.ui = new Promise(function(a, b) {
                var c = window.grecaptcha;
                null != c ? a(c) : (c = window.document.createElement("script"), c.src = "https://www.google.com/recaptcha/api.js?onload=___recaptchaload&render=explicit", window.document.head.appendChild(c), window.___recaptchaload = function() {
                    a(window.grecaptcha)
                }, c.onerror = function() {
                    b(null)
                })
            });
            return Kb.ui
        }
    }
    class J {
        constructor(a, b) {
            null == b && (b = !1);
            this.s = a;
            this.Ta = b;
            this.a = 0
        }
        tb(a) {
            null == a && (a = this.s.byteLength - this.a);
            if (this.a + a > this.s.byteLength) throw v.C("Read too much");
            let b = new Uint8Array(this.s.buffer, this.s.byteOffset + this.a, a);
            this.a += a;
            return b
        }
        Wl(a) {
            let b = this.tb(a);
            a = new ArrayBuffer(a);
            (new Uint8Array(a)).set(b);
            return a
        }
        wf() {
            return this.s.getInt8(this.a++)
        }
        F() {
            return this.s.getUint8(this.a++)
        }
        wi() {
            let a = this.s.getInt16(this.a, this.Ta);
            this.a += 2;
            return a
        }
        Rb() {
            let a = this.s.getUint16(this.a,
                this.Ta);
            this.a += 2;
            return a
        }
        N() {
            let a = this.s.getInt32(this.a, this.Ta);
            this.a += 4;
            return a
        }
        ib() {
            let a = this.s.getUint32(this.a, this.Ta);
            this.a += 4;
            return a
        }
        vi() {
            let a = this.s.getFloat32(this.a, this.Ta);
            this.a += 4;
            return a
        }
        v() {
            let a = this.s.getFloat64(this.a, this.Ta);
            this.a += 8;
            return a
        }
        Cb() {
            let a = this.a,
                b = 0,
                c, d = 0;
            do c = this.s.getUint8(a + b), 5 > b && (d |= (c & 127) << 7 * b >>> 0), ++b; while (0 != (c & 128));
            this.a += b;
            return d | 0
        }
        pe(a) {
            let b = this.a,
                c, d = "";
            for (a = b + a; b < a;) c = J.Do(this.s, b), b += c.length, d += String.fromCodePoint(c.char);
            if (b != a) throw v.C("Actual string length differs from the specified: " + (b - a) + " bytes");
            this.a = b;
            return d
        }
        Bb() {
            let a = this.Cb();
            return 0 >= a ? null : this.pe(a - 1)
        }
        kc() {
            return this.pe(this.Cb())
        }
        Yl() {
            return this.pe(this.F())
        }
        Hg() {
            let a = this.kc();
            return JSON.parse(a)
        }
        static Do(a, b) {
            var c = a.getUint8(b);
            let d, e, f, g, h = b;
            if (0 == (c & 128)) ++b;
            else if (192 == (c & 224)) d = a.getUint8(b + 1), c = (c & 31) << 6 | d & 63, b += 2;
            else if (224 == (c & 240)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), c = (c & 15) << 12 | (d & 63) << 6 | e & 63, b += 3;
            else if (240 == (c & 248)) d =
                a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63, b += 4;
            else if (248 == (c & 252)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), g = a.getUint8(b + 4), c = (c & 3) << 24 | (d & 63) << 18 | (e & 63) << 12 | (f & 63) << 6 | g & 63, b += 5;
            else if (252 == (c & 254)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), g = a.getUint8(b + 4), a = a.getUint8(b + 5), c = (c & 1) << 30 | (d & 63) << 24 | (e & 63) << 18 | (f & 63) << 12 | (g & 63) << 6 | a & 63, b += 6;
            else throw v.C("Cannot decode UTF8 character at offset " + b + ": charCode (" + c + ") is invalid");
            return {
                char: c,
                length: b - h
            }
        }
    }
    class Qa {}
    class U {
        constructor() {}
        ms() {
            return "idkey." + this.ij + "." + this.jj + "." + this.qk
        }
        Zr(a) {
            try {
                let b = A.ia(1024);
                b.m(1);
                let c = b.a;
                b.Wb(0);
                let d = b.a;
                b.oc(this.ij);
                b.oc(this.jj);
                b.Xb(a);
                let e = b.a - d;
                b.s.setUint16(c, e, b.Ta);
                let f = new Uint8Array(b.s.buffer, b.s.byteOffset + d, e);
                return window.crypto.subtle.sign(U.Fm, this.Tl, f).then(function(g) {
                    b.Vg(g);
                    return b.Vb()
                })
            } catch (b) {
                return Promise.reject(v.Lb(b).Gb())
            }
        }
        static So() {
            try {
                return window.crypto.subtle.generateKey(U.sh, !0, ["sign",
                    "verify"
                ]).then(function(a) {
                    let b = a.privateKey;
                    return window.crypto.subtle.exportKey("jwk", b).then(function(c) {
                        let d = c.y,
                            e = c.d,
                            f = new U;
                        f.ij = c.x;
                        f.jj = d;
                        f.qk = e;
                        f.Tl = b;
                        return f
                    })
                })
            } catch (a) {
                return Promise.reject(v.Lb(a).Gb())
            }
        }
        static Ro(a) {
            a = a.split(".");
            if (4 != a.length || "idkey" != a[0]) return Promise.reject("Invalid id format");
            let b = a[1],
                c = a[2],
                d = a[3];
            return U.Ds(b, c, d).then(function(e) {
                let f = new U;
                f.ij = b;
                f.jj = c;
                f.qk = d;
                f.Tl = e;
                return f
            })
        }
        static xs(a, b) {
            try {
                let c = new J(new DataView(a.buffer, a.byteOffset,
                    a.byteLength), !1);
                c.F();
                let d = c.tb(c.Rb()),
                    e = c.tb(),
                    f = new J(new DataView(d.buffer, d.byteOffset, d.byteLength), !1),
                    g = f.kc(),
                    h = f.kc(),
                    k = f.tb();
                if (k.byteLength != b.byteLength) return Promise.reject(null);
                a = 0;
                let l = k.byteLength;
                for (; a < l;) {
                    let n = a++;
                    if (k[n] != b[n]) return Promise.reject(null)
                }
                return U.Cs(g, h).then(function(n) {
                    return window.crypto.subtle.verify(U.Fm, n, e, d)
                }).then(function(n) {
                    if (!n) throw v.C(null);
                    return g
                })
            } catch (c) {
                return Promise.reject(v.Lb(c).Gb())
            }
        }
        static Ds(a, b, c) {
            try {
                return window.crypto.subtle.importKey("jwk", {
                    crv: "P-256",
                    ext: !0,
                    key_ops: ["sign"],
                    kty: "EC",
                    d: c,
                    x: a,
                    y: b
                }, U.sh, !0, ["sign"])
            } catch (d) {
                return Promise.reject(v.Lb(d).Gb())
            }
        }
        static Cs(a, b) {
            try {
                return window.crypto.subtle.importKey("jwk", {
                    crv: "P-256",
                    ext: !0,
                    key_ops: ["verify"],
                    kty: "EC",
                    x: a,
                    y: b
                }, U.sh, !0, ["verify"])
            } catch (c) {
                return Promise.reject(v.Lb(c).Gb())
            }
        }
    }
    class Lb {
        constructor(a, b, c, d) {
            this.vh = new Set;
            this.Vf = new Set;
            this.Kg = this.zf = this.wm = !1;
            this.Tc = null;
            this.Cf = this.aa = "";
            this.Ar = 5E4;
            this.zr = 1E4;
            this.xd = new Map;
            this.$r = a;
            this.ig = b;
            this.bo = c;
            this.Cf = d;
            null == this.Cf && (this.Cf = "");
            this.Ui()
        }
        ja() {
            window.clearTimeout(this.mm);
            window.clearTimeout(this.se);
            this.se = null;
            window.clearInterval(this.Hl);
            this.Z.onmessage = null;
            this.Z.onerror = null;
            this.Z.onclose = null;
            this.Z.onopen = null;
            this.Z.close();
            this.Z = null;
            this.Hk()
        }
        Pi(a) {
            if (null != this.Tc || null != a) {
                if (null != this.Tc && null != a && this.Tc.byteLength == a.byteLength) {
                    let c = new Uint8Array(this.Tc),
                        d = new Uint8Array(a),
                        e = !1,
                        f = 0,
                        g = this.Tc.byteLength;
                    for (; f < g;) {
                        let h = f++;
                        if (c[h] != d[h]) {
                            e = !0;
                            break
                        }
                    }
                    if (!e) return
                }
                this.Tc =
                    a.slice(0);
                this.Kg = !0;
                var b = this;
                null != this.Z && 1 == this.Z.readyState && null == this.se && (this.Ki(), this.se = window.setTimeout(function() {
                    b.se = null;
                    1 == b.Z.readyState && b.Kg && b.Ki()
                }, 1E4))
            }
        }
        Oi(a) {
            function b() {
                null != c.Z && 1 == c.Z.readyState && c.zf != c.wm && c.vm();
                c.jm = null
            }
            this.zf = a;
            let c = this;
            null == this.jm && (b(), this.jm = window.setTimeout(b, 1E3))
        }
        Ui(a) {
            function b(e) {
                e = e.sitekey;
                if (null == e) throw v.C(null);
                null != d.sf && d.sf(e, function(f) {
                    d.Ui(f)
                })
            }

            function c(e) {
                let f = e.url;
                if (null == f) throw v.C(null);
                e = e.token;
                if (null ==
                    e) throw v.C(null);
                d.Z = new WebSocket(f + "?token=" + e);
                d.Z.binaryType = "arraybuffer";
                d.Z.onopen = function() {
                    d.mp()
                };
                d.Z.onclose = function(g) {
                    d.Qh(4001 != g.code)
                };
                d.Z.onerror = function() {
                    d.Qh(!0)
                };
                d.Z.onmessage = M(d, d.Th)
            }
            null == a && (a = "");
            let d = this;
            Y.Sl(this.$r, "token=" + this.Cf + "&rcr=" + a, Y.Gj).then(function(e) {
                switch (e.action) {
                    case "connect":
                        c(e);
                        break;
                    case "recaptcha":
                        b(e)
                }
            }).catch(function() {
                d.Qh(!0)
            })
        }
        mp() {
            null != this.Tc && this.Ki();
            0 != this.zf && this.vm();
            let a = this;
            this.Hl = window.setInterval(function() {
                    a.Ji()
                },
                4E4)
        }
        Th(a) {
            a = new J(new DataView(a.data), !1);
            switch (a.F()) {
                case 1:
                    this.Sh(a);
                    break;
                case 4:
                    this.Rh(a);
                    break;
                case 5:
                    this.hp(a);
                    break;
                case 6:
                    this.kp(a)
            }
        }
        Sh(a) {
            let b = a.ib(),
                c = ha.Gs(a.tb(a.F())),
                d, e, f;
            try {
                a = new J(new DataView(pako.inflateRaw(a.tb()).buffer), !1);
                d = 0 != a.F();
                e = a.kc();
                let g = a.Hg(),
                    h = [],
                    k = 0;
                for (; k < g.length;) h.push(new RTCIceCandidate(g[k++]));
                f = h
            } catch (g) {
                this.Ef(b, 0);
                return
            }
            this.lp(b, c, e, f, a, d)
        }
        lp(a, b, c, d, e, f) {
            if (16 <= this.xd.size) this.Ef(a, 4104);
            else if (this.vh.has(b)) this.Ef(a, 4102);
            else {
                for (var g = [], h = 0; h < d.length;) {
                    let n = Lb.Mk(d[h++]);
                    if (null != n) {
                        if (this.Vf.has(n)) {
                            this.Ef(a, 4102);
                            return
                        }
                        g.push(n)
                    }
                }
                if (null != this.lk && (h = new J(e.s), h.a = e.a, e = this.lk(b, h), 1 == e.ob)) {
                    this.Ef(a, e.reason);
                    return
                }
                var k = new db(a, this.ig, this.bo);
                f && (k.sk = 2500);
                k.xe = g;
                k.rd = b;
                this.xd.set(a, k);
                var l = this;
                k.kd = function() {
                    l.Uc(0, k, null);
                    l.xd.delete(k.aa)
                };
                k.Id = function() {
                    l.xd.delete(k.aa);
                    l.Uc(0, k, null);
                    null != l.ul && l.ul(new Yb(k))
                };
                k.li = function(n) {
                    l.Li(k, n, k.hg, null);
                    k.Wh.then(function() {
                        l.Uc(0, k, null)
                    });
                    k.vg = function(r) {
                        l.Ii(k,
                            r)
                    }
                };
                k.Xi();
                k.xo(new RTCSessionDescription({
                    sdp: c,
                    type: "offer"
                }), d)
            }
        }
        Rh(a) {
            let b = a.ib(),
                c;
            try {
                a = new J(new DataView(pako.inflateRaw(a.tb()).buffer), !1), c = new RTCIceCandidate(a.Hg())
            } catch (d) {
                return
            }
            this.gp(b, c)
        }
        gp(a, b) {
            a = this.xd.get(a);
            if (null != a) {
                let c = Lb.Mk(b);
                if (null != c && (a.xe.push(c), this.Vf.has(c))) return;
                a.Mj(b)
            }
        }
        hp(a) {
            this.aa = a.pe(a.F());
            null != this.wg && this.wg(this.aa)
        }
        kp(a) {
            this.Cf = a.pe(a.s.byteLength - a.a)
        }
        Uc(a, b, c) {
            if (!b.Al) {
                0 == a && (b.Al = !0);
                var d = b.aa;
                b = A.ia(32, !1);
                b.m(a);
                b.ub(d);
                null != c &&
                    (a = pako.deflateRaw(c.Vb()), b.Xb(a));
                this.Z.send(b.Qd())
            }
        }
        Ef(a, b) {
            let c = A.ia(16, !1);
            c.m(0);
            c.ub(a);
            c.Wb(b);
            this.Z.send(c.Qd())
        }
        Ji() {
            let a = A.ia(1, !1);
            a.m(8);
            this.Z.send(a.Qd())
        }
        Ki() {
            this.Kg = !1;
            let a = A.ia(256, !1);
            a.m(7);
            null != this.Tc && a.Vg(this.Tc);
            this.Z.send(a.Qd())
        }
        vm() {
            let a = A.ia(2, !1);
            a.m(9);
            a.m(this.zf ? 1 : 0);
            this.Z.send(a.Qd());
            this.wm = this.zf
        }
        Li(a, b, c, d) {
            let e = A.ia(32, !1);
            e.oc(b.sdp);
            e.Wg(c);
            null != d && e.Xb(d.Vb());
            this.Uc(1, a, e)
        }
        Ii(a, b) {
            let c = A.ia(32, !1);
            c.Wg(b);
            this.Uc(4, a, c)
        }
        Hk() {
            let a = this.xd.values(),
                b = a.next();
            for (; !b.done;) {
                let c = b.value;
                b = a.next();
                c.ja()
            }
            this.xd.clear()
        }
        Qh(a) {
            this.Hk();
            window.clearTimeout(this.se);
            this.se = null;
            this.Kg = !1;
            window.clearInterval(this.Hl);
            window.clearTimeout(this.mm);
            let b = this;
            a && (this.mm = window.setTimeout(function() {
                b.Ui()
            }, this.zr + Math.random() * this.Ar | 0))
        }
        Rn(a) {
            let b = 0,
                c = a.xe;
            for (; b < c.length;) this.Vf.add(c[b++]);
            null != a.rd && this.vh.add(a.rd);
            return {
                wt: a.xe,
                ut: a.rd
            }
        }
        be() {
            this.Vf.clear();
            this.vh.clear()
        }
        static Mk(a) {
            try {
                let b = Gc.uf(a.candidate);
                if ("srflx" == b.ps) return b.sp
            } catch (b) {}
            return null
        }
    }
    class ya {
        constructor() {
            this.fd = new Map
        }
        Ra(a, b) {
            this.fd.set(a, b)
        }
        A(a) {
            return this.fd.get(a)
        }
        ir(a) {
            this.fd.delete(a)
        }
        Yo(a) {
            let b = [],
                c = this.fd.keys(),
                d = c.next();
            for (; !d.done;) {
                let e = d.value;
                d = c.next();
                this.fd.get(e) == a && b.push(e)
            }
            return b
        }
        Ae() {
            let a = {},
                b = this.fd.keys(),
                c = b.next();
            for (; !c.done;) {
                let d = c.value;
                c = b.next();
                a[d] = this.fd.get(d)
            }
            return JSON.stringify(a)
        }
        static eg(a) {
            let b = new ya,
                c = Dc.dn(a),
                d = 0;
            for (; d < c.length;) {
                let e = c[d];
                ++d;
                b.fd.set(e, a[e])
            }
            return b
        }
        static Mh(a) {
            return ya.eg(JSON.parse(a))
        }
        static rk() {
            let a =
                new ya;
            a.Ra("ArrowUp", "Up");
            a.Ra("KeyW", "Up");
            a.Ra("ArrowDown", "Down");
            a.Ra("KeyS", "Down");
            a.Ra("ArrowLeft", "Left");
            a.Ra("KeyA", "Left");
            a.Ra("ArrowRight", "Right");
            a.Ra("KeyD", "Right");
            a.Ra("KeyX", "Kick");
            a.Ra("Space", "Kick");
            a.Ra("ControlLeft", "Kick");
            a.Ra("ControlRight", "Kick");
            a.Ra("ShiftLeft", "Kick");
            a.Ra("ShiftRight", "Kick");
            a.Ra("Numpad0", "Kick");
            return a
        }
    }
    class I {
        constructor() {
            this.Pg = this.Qg = this.xa = null;
            this.pk = 0;
            this.da = this.Y = this.ee = null;
            this.Hc = 0;
            this.o = 1;
            this.h = 63;
            this.w = 32;
            this.wb = 1 /
                0;
            this.$a = !0;
            this.S = 0
        }
        fa(a) {
            let b = 0,
                c = a.a;
            a.m(0);
            a.m(this.Y.Dd);
            a.m(this.da.Dd);
            0 != this.Hc && (b = 1, a.u(this.Hc));
            this.wb != 1 / 0 && (b |= 2, a.u(this.wb));
            0 != this.S && (b |= 4, a.P(this.S));
            this.$a && (b |= 8);
            a.s.setUint8(c, b);
            a.u(this.o);
            a.P(this.h);
            a.P(this.w)
        }
        ka(a, b) {
            let c = a.F();
            this.Y = b[a.F()];
            this.da = b[a.F()];
            this.Hc = 0 != (c & 1) ? a.v() : 0;
            this.wb = 0 != (c & 2) ? a.v() : 1 / 0;
            this.S = 0 != (c & 4) ? a.N() : 0;
            this.$a = 0 != (c & 8);
            this.o = a.v();
            this.h = a.N();
            this.w = a.N()
        }
        Vc(a) {
            a *= .017453292519943295;
            if (0 > a) {
                a = -a;
                let b = this.Y;
                this.Y = this.da;
                this.da =
                    b;
                this.Hc = -this.Hc
            }
            a > I.Dn && a < I.Cn && (this.wb = 1 / Math.tan(a / 2))
        }
        Wo() {
            return 0 != 0 * this.wb ? 0 : 114.59155902616465 * Math.atan(1 / this.wb)
        }
        oe() {
            if (0 == 0 * this.wb) {
                var a = this.da.a,
                    b = this.Y.a,
                    c = .5 * (a.x - b.x);
                a = .5 * (a.y - b.y);
                b = this.Y.a;
                let d = this.wb;
                this.ee = new P(b.x + c + -a * d, b.y + a + c * d);
                a = this.Y.a;
                b = this.ee;
                c = a.x - b.x;
                a = a.y - b.y;
                this.pk = Math.sqrt(c * c + a * a);
                c = this.Y.a;
                a = this.ee;
                this.Pg = new P(-(c.y - a.y), c.x - a.x);
                c = this.ee;
                a = this.da.a;
                this.Qg = new P(-(c.y - a.y), c.x - a.x);
                0 >= this.wb && (a = c = this.Pg, c.x = -a.x, c.y = -a.y, a = c = this.Qg,
                    c.x = -a.x, c.y = -a.y)
            } else a = this.Y.a, b = this.da.a, c = a.x - b.x, a = -(a.y - b.y), b = Math.sqrt(a * a + c * c), this.xa = new P(a / b, c / b)
        }
    }
    class Kc {
        static description(a) {
            switch (a) {
                case 4001:
                    return "The room was closed.";
                case 4100:
                    return "The room is full.";
                case 4101:
                    return "Wrong password.";
                case 4102:
                    return "You are banned from this room.";
                case 4103:
                    return "Incompatible game version.";
                default:
                    return "Connection closed (" + a + ")"
            }
        }
    }
    class ac {}
    class ic {
        constructor(a) {
            this.hd = window.performance.now();
            this.Bd = this.Oe = 0;
            this.ya = a;
            this.l =
                new xa(a.xc);
            let b = new Zb(this.l);
            b.Ai(a.U);
            window.document.addEventListener("keydown", M(this, this.rb));
            window.document.addEventListener("keyup", M(this, this.Kd));
            window.requestAnimationFrame(M(this, this.pf));
            let c = this;
            this.Lh = window.setInterval(function() {
                c.l.Gf.Am(c.Bd);
                c.Bd = 0
            }, 1E3);
            this.Dm(m.j.Ac.A());
            this.l.f.classList.add("replayer");
            this.qe = new La(a);
            this.qe.vq = function() {
                b.rs(a.U)
            };
            this.qe.uq = function() {
                c.l.ue(null == a.U.M);
                b.Ai(a.U)
            };
            this.qe.xl = function() {
                c.l.hb.fb.xr()
            };
            this.l.f.appendChild(this.qe.f)
        }
        ja() {
            window.document.removeEventListener("keydown",
                M(this, this.rb));
            window.document.removeEventListener("keyup", M(this, this.Kd));
            window.onbeforeunload = null;
            window.cancelAnimationFrame(this.Oe);
            window.clearInterval(this.Lh)
        }
        pf() {
            this.Oe = window.requestAnimationFrame(M(this, this.pf));
            this.ya.B();
            this.Rc()
        }
        Rc() {
            this.qe.B();
            let a = window.performance.now();
            1 == m.j.Kh.A() && 28.333333333333336 > a - this.hd || (this.hd = a, this.Bd++, this.Dm(m.j.Ac.A()), 0 < this.ya.Pd || this.l.B(this.ya))
        }
        rb(a) {
            switch (a.keyCode) {
                case 27:
                    let b = this.l;
                    b.ue(!b.nd);
                    a.preventDefault();
                    break;
                case 49:
                    m.j.Ac.ta(1);
                    break;
                case 50:
                    m.j.Ac.ta(2);
                    break;
                case 51:
                    m.j.Ac.ta(3);
                    break;
                case 52:
                    m.j.Ac.ta(4)
            }
        }
        Dm() {
            let a = m.j.Ac.A(),
                b = this.l.hb.fb;
            b.re = m.j.Fi.A();
            b.Tg = 35;
            0 >= a ? b.Md = 610 : (b.Md = 0, b.Gg = 1 + .25 * (a - 1))
        }
        Kd() {}
    }
    class bc {
        constructor(a, b) {
            this.ya = a;
            this.ca = b
        }
        uf(a) {
            if ("/" != a.charAt(0)) return !1;
            if (1 == a.length) return !0;
            a = Z.mt(O.substr(a, 1, null)).split(" ");
            let b = a[0],
                c = this;
            switch (b) {
                case "avatar":
                    2 == a.length && (this.ym(a[1]), this.ca("Avatar set"));
                    break;
                case "checksum":
                    var d = this.ya.U.T;
                    a = d.D;
                    d.af() ? this.ca('Current stadium is original: "' +
                        a + '"') : (d = Z.eh(d.hk(), 8), this.ca('Stadium: "' + a + '" (checksum: ' + d + ")"));
                    break;
                case "clear_avatar":
                    this.ym(null);
                    this.ca("Avatar cleared");
                    break;
                case "clear_bans":
                    null == this.be ? this.ca("Only the host can clear bans") : (this.be(), this.ca("All bans have been cleared"));
                    break;
                case "clear_password":
                    null == this.Og ? this.ca("Only the host can change the password") : (this.Og(null), this.ca("Password cleared"));
                    break;
                case "colors":
                    try {
                        d = bc.Dq(a), this.ya.sa(d)
                    } catch (g) {
                        a = v.Lb(g).Gb(), "string" == typeof a && this.ca(a)
                    }
                    break;
                case "extrapolation":
                    2 == a.length ? (a = Q.parseInt(a[1]), null != a && -200 <= a && 1E3 >= a ? (m.j.Ad.ta(a), this.ya.zm(a), this.ca("Extrapolation set to " + a + " msec")) : this.ca("Extrapolation must be a value between -200 and 1000 milliseconds")) : this.ca("Extrapolation requires a value in milliseconds.");
                    break;
                case "handicap":
                    2 == a.length ? (a = Q.parseInt(a[1]), null != a && 0 <= a && 300 >= a ? (this.ya.Nr(a), this.ca("Ping handicap set to " + a + " msec")) : this.ca("Ping handicap must be a value between 0 and 300 milliseconds")) : this.ca("Ping handicap requires a value in milliseconds.");
                    break;
                case "kick_ratelimit":
                    if (4 > a.length) this.ca("Usage: /kick_ratelimit <min> <rate> <burst>");
                    else {
                        d = Q.parseInt(a[1]);
                        var e = Q.parseInt(a[2]);
                        a = Q.parseInt(a[3]);
                        null == d || null == e || null == a ? this.ca("Invalid arguments") : this.ya.sa(Ka.na(d, e, a))
                    }
                    break;
                case "recaptcha":
                    if (null == this.Bm) this.ca("Only the host can set recaptcha mode");
                    else try {
                        if (2 == a.length) {
                            switch (a[1]) {
                                case "off":
                                    e = !1;
                                    break;
                                case "on":
                                    e = !0;
                                    break;
                                default:
                                    throw v.C(null);
                            }
                            this.Bm(e);
                            this.ca("Room join Recaptcha " + (e ? "enabled" : "disabled"))
                        } else throw v.C(null);
                    } catch (g) {
                        this.ca("Usage: /recaptcha <on|off>")
                    }
                    break;
                case "set_password":
                    2 == a.length && (null == this.Og ? this.ca("Only the host can change the password") : (this.Og(a[1]), this.ca("Password set")));
                    break;
                case "store":
                    let f = this.ya.U.T;
                    f.af() ? this.ca("Can't store default stadium.") : lb.kt().then(function() {
                        return lb.add(f)
                    }).then(function() {
                        c.ca("Stadium stored")
                    }, function() {
                        c.ca("Couldn't store stadium")
                    });
                    break;
                default:
                    this.ca('Unrecognized command: "' + b + '"')
            }
            return !0
        }
        ym(a) {
            null != a && (a = ha.Yc(a, 2));
            m.j.uh.ta(a);
            this.ya.sa(Ja.na(a))
        }
        static Dq(a) {
            if (3 > a.length) throw v.C("Not enough arguments");
            if (7 < a.length) throw v.C("Too many arguments");
            let b = new Ya,
                c = new va;
            b.ah = c;
            switch (a[1]) {
                case "blue":
                    c.gb = [u.Ca.S];
                    b.ea = u.Ca;
                    break;
                case "red":
                    c.gb = [u.ga.S];
                    b.ea = u.ga;
                    break;
                default:
                    throw v.C('First argument must be either "red" or "blue"');
            }
            if ("clear" == a[2]) return b;
            c.sd = 256 * Q.parseInt(a[2]) / 360 | 0;
            c.od = Q.parseInt("0x" + a[3]);
            if (4 < a.length) {
                c.gb = [];
                let d = 4,
                    e = a.length;
                for (; d < e;) c.gb.push(Q.parseInt("0x" + a[d++]))
            }
            return b
        }
    }
    class cc {
        constructor(a) {
            this.$b = a.slice()
        }
        eval(a) {
            var b = this.$b.length - 1;
            if (a <= this.$b[0]) return this.$b[1];
            if (a >= this.$b[b]) return this.$b[b - 2];
            var c = 0;
            b = b / 5 | 0;
            do {
                var d = b + c >>> 1;
                a > this.$b[5 * d] ? c = d + 1 : b = d - 1
            } while (c <= b);
            c = 5 * b;
            b = this.$b[c];
            a = (a - b) / (this.$b[c + 5] - b);
            b = a * a;
            d = b * a;
            return (2 * d - 3 * b + 1) * this.$b[c + 1] + (d - 2 * b + a) * this.$b[c + 2] + (-2 * d + 3 * b) * this.$b[c + 3] + (d - b) * this.$b[c + 4]
        }
    }
    class eb {
        constructor() {
            this.list = []
        }
        jn(a) {
            let b = 0,
                c = a.nb,
                d = a.Dc,
                e = 0,
                f = this.list;
            for (; e < f.length;) {
                var g = f[e];
                ++e;
                let h = g.nb;
                if (h > c) break;
                if (h == c) {
                    g = g.Dc;
                    if (g > d) break;
                    g == d && ++d
                }++b
            }
            a.Dc = d;
            this.list.splice(b, 0, a)
        }
        it(a) {
            let b = 0,
                c = 0,
                d = this.list;
            for (; c < d.length && !(d[c++].nb >= a);) ++b;
            this.list.splice(0, b)
        }
        Is(a, b) {
            let c = this.list;
            for (; 0 < c.length;) c.pop();
            eb.$s(a.list, b.list, this.list)
        }
        jt(a) {
            let b = 0,
                c = this.list,
                d = 0,
                e = c.length;
            for (; d < e;) {
                let f = c[d++];
                f.Ce != a && (c[b] = f, ++b)
            }
            for (; c.length > b;) c.pop()
        }
        Js(a) {
            let b = 0,
                c = 0,
                d = this.list;
            for (; c < d.length && !(d[c++].nb >= a);) ++b;
            return b
        }
        static $s(a, b, c) {
            if (0 == a.length)
                for (a = 0; a < b.length;) c.push(b[a++]);
            else if (0 ==
                b.length)
                for (b = 0; b < a.length;) c.push(a[b++]);
            else {
                let d = 0,
                    e = a.length,
                    f = 0,
                    g = b.length;
                for (;;) {
                    let h = a[d],
                        k = b[f];
                    if (h.nb <= k.nb) {
                        if (c.push(h), ++d, d >= e) {
                            for (; f < g;) c.push(b[f++]);
                            break
                        }
                    } else if (c.push(k), ++f, f >= g) {
                        for (; d < e;) c.push(a[d++]);
                        break
                    }
                }
            }
        }
    }
    class C {
        static Ss() {
            try {
                return window.self != window.top
            } catch (a) {
                return !0
            }
        }
        static fh(a) {
            return new Promise(function(b, c) {
                let d = window.document.createElement("img");
                d.onload = function() {
                    URL.revokeObjectURL(d.src);
                    d.onload = null;
                    b(d)
                };
                d.onerror = function() {
                    URL.revokeObjectURL(d.src);
                    c(null)
                };
                d.src = URL.createObjectURL(new Blob([a], {
                    type: "image/png"
                }))
            })
        }
        static qj(a) {
            C.Ss() && C.Ms(function() {
                Hc.qj();
                let b = null == m.j.Xe.A() ? ma.Zo().then(function(d) {
                        m.j.Xe.ta(d)
                    }, function() {}) : Promise.resolve(null),
                    c = Y.A("res.dat", "arraybuffer").then(function(d) {
                        d = new JSZip(d);
                        m.Na = new wc(d);
                        return Promise.all([m.Na.Lo, C.fh(d.file("images/grass.png").asArrayBuffer()).then(function(e) {
                            return m.ep = e
                        }), C.fh(d.file("images/concrete.png").asArrayBuffer()).then(function(e) {
                            return m.qo = e
                        }), C.fh(d.file("images/concrete2.png").asArrayBuffer()).then(function(e) {
                            return m.oo =
                                e
                        }), C.fh(d.file("images/typing.png").asArrayBuffer()).then(function(e) {
                            return m.Vm = e
                        })])
                    });
                Promise.all([c, b]).then(function() {
                    C.at(a)
                })
            })
        }
        static Ms(a) {
            let b = Modernizr,
                c = "canvas datachannel dataview es6collections peerconnection promises websockets".split(" "),
                d = [],
                e = 0;
            for (; e < c.length;) {
                let f = c[e];
                ++e;
                b[f] || d.push(f)
            }
            0 != d.length ? (window.document.body.innerHTML = "", C.Yg = window.document.createElement("div"), window.document.body.appendChild(C.Yg), a = new hb(d), C.La(a.f)) : a()
        }
        static at(a) {
            window.document.body.innerHTML =
                "";
            C.Yg = window.document.createElement("div");
            window.document.body.appendChild(C.Yg);
            let b = null;
            b = function() {
                m.Na.lm();
                window.document.removeEventListener("click", b, !0)
            };
            window.document.addEventListener("click", b, !0);
            a()
        }
        static La(a) {
            null != C.nn && C.nn.remove();
            null != a && (C.Yg.appendChild(a), C.nn = a)
        }
    }
    class Cb {
        constructor() {
            this.ye = u.Ma;
            this.da = new P(0, 0);
            this.Y = new P(0, 0)
        }
        fa(a) {
            var b = this.Y;
            a.u(b.x);
            a.u(b.y);
            b = this.da;
            a.u(b.x);
            a.u(b.y);
            a.m(this.ye.aa)
        }
        ka(a) {
            var b = this.Y;
            b.x = a.v();
            b.y = a.v();
            b = this.da;
            b.x = a.v();
            b.y = a.v();
            a = a.wf();
            this.ye = 1 == a ? u.ga : 2 == a ? u.Ca : u.Ma
        }
    }
    class ea {
        constructor(a, b) {
            let c = [],
                d = 0;
            for (; d < a.length;) c.push(this.Qp(a[d++], b));
            this.hf = c
        }
        To() {
            return 2.31 + .1155 * (this.hf.length - 1)
        }
        Rc(a, b) {
            b /= 2.31;
            let c = 0;
            a.imageSmoothingEnabled = !0;
            let d = 0,
                e = this.hf;
            for (; d < e.length;) {
                let g = e[d];
                ++d;
                var f = b - .05 * c;
                let h = ea.An.eval(f),
                    k = 35 * -(this.hf.length - 1) + 70 * c;
                f = 180 * ea.Bn.eval(f);
                a.globalAlpha = h;
                a.drawImage(g, f * (0 != (c & 1) ? -1 : 1) - .5 * g.width, k - .5 * g.height);
                a.globalAlpha = 1;
                ++c
            }
            a.imageSmoothingEnabled = !1
        }
        tr(a) {
            let b = 0;
            a.imageSmoothingEnabled = !0;
            let c = 0,
                d = this.hf;
            for (; c < d.length;) {
                let e = d[c];
                ++c;
                a.drawImage(e, .5 * -e.width, 35 * -(this.hf.length - 1) + 70 * b - .5 * e.height);
                ++b
            }
            a.imageSmoothingEnabled = !1
        }
        nc(a) {
            return "rgba(" + [(a & 16711680) >>> 16, (a & 65280) >>> 8, a & 255].join() + ",255)"
        }
        Qp(a, b) {
            let c = window.document.createElement("canvas"),
                d = c.getContext("2d", null);
            d.font = "900 70px 'Arial Black','Arial Bold',Gadget,sans-serif";
            c.width = Math.ceil(d.measureText(a).width) + 7;
            c.height = 90;
            d.font = "900 70px 'Arial Black','Arial Bold',Gadget,sans-serif";
            d.textAlign = "left";
            d.textBaseline = "middle";
            d.fillStyle = "black";
            d.fillText(a, 7, 52);
            d.fillStyle = this.nc(b);
            d.fillText(a, 0, 45);
            return c
        }
    }
    class $b {
        static parse(a) {
            a.F();
            let b = [];
            for (; 0 != a.s.byteLength - a.a;) {
                let c = a.pe(a.Rb()),
                    d = a.Wl(a.Rb());
                try {
                    let e = new Qb;
                    e.ka(new J(new DataView(d), !1));
                    let f = new vc;
                    f.Ed = e;
                    f.aa = c;
                    b.push(f)
                } catch (e) {}
            }
            return b
        }
        static Rs(a, b, c, d) {
            return Math.acos(Math.sin(a) * Math.sin(c) + Math.cos(a) * Math.cos(c) * Math.cos(b - d))
        }
        static nt(a, b) {
            let c = a.Jc;
            a = a.Mc;
            let d = 0;
            for (; d < b.length;) {
                let e =
                    b[d];
                ++d;
                let f = e.Ed;
                e.We = 6378 * $b.Rs(.017453292519943295 * f.Jc, .017453292519943295 * f.Mc, .017453292519943295 * c, .017453292519943295 * a);
                isFinite(e.We) || (e.We = 22E3)
            }
        }
        static get() {
            return Y.A(m.Pe + "api/list", "arraybuffer").then(function(a) {
                return $b.parse(new J(new DataView(a), !1))
            })
        }
    }
    class za {
        constructor(a, b, c, d) {
            this.D = a;
            this.As = d;
            this.ei = b;
            d = null;
            null != b && (d = b.getItem(a));
            this.$m = c(d)
        }
        A() {
            return this.$m
        }
        ta(a) {
            this.$m = a;
            if (null != this.ei) try {
                let b = this.As(a);
                null == b ? this.ei.removeItem(this.D) : this.ei.setItem(this.D,
                    b)
            } catch (b) {}
        }
    }
    class dc {
        constructor(a, b, c, d, e, f) {
            this.th = this.Dh = !1;
            this.qa = new db(0, b, d);
            let g = this;
            this.qa.kd = function() {
                g.Ze(na.Je)
            };
            this.qa.Id = function() {
                null != g.Id && g.Id(new Yb(g.qa));
                g.qa = null;
                g.jk()
            };
            this.qa.li = function(h) {
                g.Kr = h;
                g.Z = new WebSocket(a + "client?id=" + c + (null == f ? "" : "&token=" + f));
                g.Z.binaryType = "arraybuffer";
                g.Z.onclose = function(k) {
                    g.Dh || g.Ze(na.Ke(k.code))
                };
                g.Z.onerror = function() {
                    g.Dh || g.Ze(na.Error)
                };
                g.Z.onmessage = M(g, g.Th);
                g.Z.onopen = function() {
                    null != g.zl && g.zl();
                    g.qa.Xi();
                    g.Li(g.Kr,
                        g.qa.hg, e);
                    g.qa.vg = M(g, g.Ii);
                    g.qa.Wh.then(function() {
                        g.Uc(0, null)
                    })
                }
            };
            this.qa.zo()
        }
        $n() {
            this.Ze(na.Ie)
        }
        jk() {
            null != this.Z && (this.Z.onclose = null, this.Z.onmessage = null, this.Z.onerror = null, this.Z.onopen = null, this.Z.close(), this.Z = null);
            null != this.qa && (this.qa.ja(), this.qa = null)
        }
        Ze(a) {
            null != this.kd && this.kd(a);
            this.jk()
        }
        Th(a) {
            var b = new J(new DataView(a.data));
            a = b.F();
            0 < b.s.byteLength - b.a && (b = new J(new DataView(pako.inflateRaw(b.tb()).buffer), !1));
            switch (a) {
                case 1:
                    a = b.kc();
                    b = b.Hg();
                    let c = [],
                        d = 0;
                    for (; d <
                        b.length;) c.push(new RTCIceCandidate(b[d++]));
                    this.Sh(a, c);
                    break;
                case 4:
                    this.Rh(new RTCIceCandidate(b.Hg()))
            }
        }
        Sh(a, b) {
            this.qa.Xi(this.th ? 1E4 : 4E3);
            this.Dh = !0;
            null != this.rl && this.rl();
            let c = this;
            this.qa.Sa.setRemoteDescription(new RTCSessionDescription({
                sdp: a,
                type: "answer"
            }), function() {
                let d = 0;
                for (; d < b.length;) c.qa.Sa.addIceCandidate(b[d++])
            }, function() {
                c.Ze(na.Error)
            })
        }
        Rh(a) {
            this.qa.Sa.addIceCandidate(a)
        }
        Uc(a, b) {
            if (null != this.Z) {
                var c = A.ia(32, !1);
                c.m(a);
                null != b && (a = pako.deflateRaw(b.Vb()), c.Xb(a));
                this.Z.send(c.Qd())
            }
        }
        Li(a, b, c) {
            let d = A.ia(32, !1);
            d.m(this.th ? 1 : 0);
            d.oc(a.sdp);
            d.Wg(b);
            null != c && d.Xb(c.Vb());
            this.Uc(1, d)
        }
        Ii(a) {
            let b = A.ia(32, !1);
            b.Wg(a);
            this.Uc(4, b)
        }
        static Xo(a) {
            switch (a.ob) {
                case 0:
                    return "Failed";
                case 1:
                    return Kc.description(a.code);
                case 2:
                    return "";
                case 3:
                    return "Master connection error"
            }
        }
    }
    class tb {
        constructor(a) {
            function b() {
                d.Ic() && null != d.vl && d.vl(d.Eb.value)
            }
            this.f = x.Ha(tb.O);
            let c = x.Aa(this.f);
            this.Eb = c.get("input");
            this.nf = c.get("ok");
            let d = this;
            this.Eb.maxLength = 25;
            this.Eb.value =
                a;
            this.Eb.oninput = function() {
                d.B()
            };
            this.Eb.onkeydown = function(e) {
                13 == e.keyCode && b()
            };
            this.nf.onclick = b;
            this.B()
        }
        Ic() {
            let a = this.Eb.value;
            return 25 >= a.length ? 0 < a.length : !1
        }
        B() {
            this.nf.disabled = !this.Ic()
        }
    }
    class xc {
        constructor(a, b) {
            this.ph = null;
            this.ot = .025;
            this.De = this.mh = this.Pf = 0;
            this.bh = b.createGain();
            this.bh.gain.value = 0;
            b = b.createBufferSource();
            b.buffer = a;
            b.connect(this.bh);
            b.loop = !0;
            b.start()
        }
        update() {
            var a = window.performance.now();
            let b = a - this.mn;
            this.mn = a;
            this.De += (this.mh - this.De) * this.ot;
            this.Pf -= b;
            0 >= this.Pf && (this.Pf = this.mh = 0);
            0 >= this.mh && .05 > this.De && (window.clearInterval(this.ph), this.ph = null, this.De = 0);
            a = m.j.Gm.A() ? this.De : 0;
            this.bh.gain.value = a
        }
        zj(a) {
            this.mh = a;
            this.Pf = 166.66666666666666;
            let b = this;
            null == this.ph && (this.ph = window.setInterval(function() {
                b.update()
            }, 17), this.mn = window.performance.now())
        }
        connect(a) {
            this.bh.connect(a)
        }
        qt(a) {
            let b = a.M;
            if (null != b)
                if (2 == b.Db) 0 >= b.Qa && this.zj(1);
                else if (1 == b.Db) {
                let e = b.ua.H[0],
                    f = null,
                    g = null,
                    h = null,
                    k = 0,
                    l = null,
                    n = null,
                    r = null,
                    t = 0,
                    z = u.ga.Hh,
                    K = 0;
                for (a = a.K; K < a.length;) {
                    let N = a[K];
                    ++K;
                    if (null == N.J) continue;
                    var c = N.J.a;
                    let Hb = e.a;
                    var d = c.x - Hb.x;
                    c = c.y - Hb.y;
                    d = d * d + c * c;
                    if (N.ea == u.ga) {
                        if (null == f || f.a.x * z < N.J.a.x * z) f = N.J;
                        if (null == g || g.a.x * z > N.J.a.x * z) g = N.J;
                        if (null == h || d < k) h = N.J, k = d
                    } else if (N.ea == u.Ca) {
                        if (null == l || l.a.x * z < N.J.a.x * z) l = N.J;
                        if (null == n || n.a.x * z > N.J.a.x * z) n = N.J;
                        if (null == r || d < t) r = N.J, t = d
                    }
                }
                null != n && null != g && 0 >= b.Qa && (h.a.x > n.a.x && e.a.x > n.a.x && 20 < e.a.x && this.zj(.3), r.a.x < g.a.x && e.a.x < g.a.x && -20 > e.a.x && this.zj(.3))
            }
        }
    }
    class ha {
        static Yc(a,
            b) {
            return a.length <= b ? a : O.substr(a, 0, b)
        }
        static Gs(a) {
            let b = "",
                c = 0,
                d = a.byteLength;
            for (; c < d;) b += Z.eh(a[c++], 2);
            return b
        }
    }
    class ec {
        constructor(a) {
            this.Zs = a;
            this.ab = []
        }
        add(a) {
            var b = this.ab.length;
            let c = 0,
                d = this.Yd = 0;
            for (; d < b;) {
                let e = d++,
                    f = this.ab[e];
                f.index++;
                f.weight *= .97;
                this.ab[c].index < f.index && (c = e);
                this.Yd += f.weight
            }
            b >= this.Zs ? (b = this.ab[c], this.Yd -= b.weight, this.ab.splice(c, 1)) : b = new qc;
            b.value = a;
            b.weight = 1;
            b.index = 0;
            this.Yd += b.weight;
            for (a = 0; a < this.ab.length && this.ab[a].value <= b.value;) ++a;
            this.ab.splice(a,
                0, b)
        }
        jh() {
            if (0 == this.ab.length) return 0;
            if (1 == this.ab.length) return this.ab[0].value;
            var a = .5 * this.Yd;
            let b = this.ab[0].weight,
                c = 0;
            for (; c < this.ab.length - 1 && !(b >= a);) ++c, b += this.ab[c].weight;
            return this.ab[c].value
        }
        max() {
            return 0 == this.ab.length ? 0 : this.ab[this.ab.length - 1].value
        }
    }
    class Y {
        static im(a, b, c, d, e) {
            return new Promise(function(f, g) {
                let h = new XMLHttpRequest;
                h.open(b, a);
                h.responseType = c;
                h.onload = function() {
                    200 <= h.status && 300 > h.status ? null != h.response ? f(h.response) : g(null) : g("status: " + h.status)
                };
                h.onerror = function(k) {
                    g(k)
                };
                null != e && h.setRequestHeader("Content-type", e);
                h.send(d)
            })
        }
        static A(a, b) {
            return Y.im(a, "GET", b, null)
        }
        static Kk(a) {
            return Y.A(a, "json").then(function(b) {
                let c = b.error;
                if (null != c) throw v.C(c);
                return b.data
            })
        }
        static Mq(a, b, c) {
            return Y.im(a, "POST", "json", b, c)
        }
        static Sl(a, b, c) {
            return Y.Mq(a, b, c).then(function(d) {
                let e = d.error;
                if (null != e) throw v.C(e);
                return d.data
            })
        }
    }
    class u {
        constructor(a, b, c, d, e, f, g, h) {
            this.Bg = null;
            this.aa = a;
            this.S = b;
            this.Hh = c;
            this.zp = d;
            this.D = e;
            this.Co = f;
            this.w =
                h;
            this.Om = new va;
            this.Om.gb.push(b)
        }
    }
    class yc {
        constructor() {
            function a(g) {
                return new za(g, f, function(h) {
                    if (null == h) return null;
                    try {
                        return ma.Mh(h)
                    } catch (k) {
                        return null
                    }
                }, function(h) {
                    if (null == h) return null;
                    try {
                        return h.Ae()
                    } catch (k) {
                        return null
                    }
                })
            }

            function b(g, h) {
                return new za(g, f, function(k) {
                    return null != k ? "0" != k : h
                }, function(k) {
                    return k ? "1" : "0"
                })
            }

            function c(g, h) {
                return new za(g, f, function(k) {
                    let l = h;
                    try {
                        null != k && (l = parseFloat(k))
                    } catch (n) {}
                    return l
                }, function(k) {
                    return "" + k
                })
            }

            function d(g, h) {
                return new za(g,
                    f,
                    function(k) {
                        let l = h;
                        try {
                            null != k && (l = Q.parseInt(k))
                        } catch (n) {}
                        return l
                    },
                    function(k) {
                        return "" + k
                    })
            }

            function e(g, h, k) {
                return new za(g, f, function(l) {
                    return null == l ? h : ha.Yc(l, k)
                }, function(l) {
                    return l
                })
            }
            let f = zc.gn();
            this.ne = e("player_name", "", 25);
            this.Ac = d("view_mode", -1);
            this.Kh = d("fps_limit", 0);
            this.uh = e("avatar", null, 2);
            e("rctoken", null, 1024);
            this.Pm = b("team_colors", !0);
            this.Rk = b("show_indicators", !0);
            this.Si = c("sound_volume", 1);
            this.ve = b("sound_main", !0);
            this.Ri = b("sound_chat", !0);
            this.Hm = b("sound_highlight",
                !0);
            this.Gm = b("sound_crowd", !0);
            this.Uj = e("player_auth_key", null, 1024);
            this.Ad = d("extrapolation", 0);
            this.Fi = c("resolution_scale", 1);
            this.Em = b("show_avatars", !0);
            this.gk = d("chat_height", 160);
            this.Ah = d("chat_focus_height", 140);
            this.Bh = c("chat_opacity", .8);
            this.fk = e("chat_bg_mode", "compact", 50);
            this.di = b("low_latency_canvas", !0);
            this.Xe = a("geo");
            this.Ye = a("geo_override");
            this.me = function() {
                return new za("player_keys", f, function(g) {
                        if (null == g) return ya.rk();
                        try {
                            return ya.Mh(g)
                        } catch (h) {
                            return ya.rk()
                        }
                    },
                    function(g) {
                        try {
                            return g.Ae()
                        } catch (h) {
                            return null
                        }
                    })
            }()
        }
        Ph() {
            return null != this.Ye.A() ? this.Ye.A() : null != this.Xe.A() ? this.Xe.A() : new ma
        }
    }
    class aa {
        constructor(a) {
            let b = new ba("Only humans", "", []);
            this.f = b.f;
            b.ce.style.minHeight = "78px";
            let c = this;
            Kb.Ep().then(function(d) {
                null == aa.Ig && (aa.Ig = window.document.createElement("div"), b.ce.appendChild(aa.Ig), aa.cr = d.render(aa.Ig, {
                    sitekey: a,
                    callback: function(e) {
                        D.i(aa.$l, e)
                    },
                    theme: "dark"
                }));
                d.reset(aa.cr);
                aa.$l = function(e) {
                    window.setTimeout(function() {
                        D.i(c.Va,
                            e)
                    }, 1E3);
                    aa.$l = null
                };
                b.ce.appendChild(aa.Ig)
            })
        }
    }
    class wb {
        constructor() {
            this.f = x.Ha(wb.O);
            let a = x.Aa(this.f);
            this.Lc = a.get("log");
            this.yh = a.get("cancel")
        }
        ca(a) {
            let b = window.document.createElement("p");
            b.textContent = a;
            this.Lc.appendChild(b)
        }
    }
    class Qb {
        constructor() {}
        ck() {
            this.D = ha.Yc(this.D, 40);
            this.vb = ha.Yc(this.vb, 3)
        }
        fa(a) {
            this.ck();
            a.Ta = !0;
            a.Wb(this.Rd);
            a.an(this.D);
            a.an(this.vb);
            a.gj(this.Jc);
            a.gj(this.Mc);
            a.m(this.Kb ? 1 : 0);
            a.m(this.jf);
            a.m(this.K);
            a.Ta = !1
        }
        ka(a) {
            a.Ta = !0;
            this.Rd = a.Rb();
            this.D = a.Yl();
            this.vb = a.Yl();
            this.Jc = a.vi();
            this.Mc = a.vi();
            this.Kb = 0 != a.F();
            this.jf = a.F();
            this.K = a.F();
            a.Ta = !1;
            if (30 < this.K || 30 < this.jf) throw v.C(null);
            this.ck()
        }
    }
    class kc {
        constructor() {
            this.Fh = 0;
            this.Tp = 400;
            this.Pk = 64;
            this.fj = 32;
            this.la = window.document.createElement("canvas");
            this.dg = window.document.createElement("canvas");
            this.f = window.document.createElement("div");
            this.dg.width = this.la.width = this.fj;
            this.dg.height = this.la.height = this.Pk;
            this.Jh = this.dg.getContext("2d", null);
            this.c = this.la.getContext("2d", null);
            this.c.fillStyle = "green";
            let a = [],
                b = 0,
                c = this.fj;
            for (; b < c;) ++b, a.push(0);
            this.Fq = a;
            this.f.appendChild(this.dg);
            this.f.className = "graph";
            this.f.hidden = !0
        }
        Ln(a) {
            this.f.hidden = !1;
            0 > a ? (a = 150, this.c.fillStyle = "#c13535") : this.c.fillStyle = "#32FF32";
            let b = this.fj,
                c = this.Pk,
                d = this.Fh++;
            this.Fh >= b && (this.Fh = 0);
            this.Fq[d] = a;
            this.c.clearRect(d, 0, 1, c);
            a = a * c / this.Tp;
            this.c.fillRect(d, c - a, 1, a);
            this.Jh.clearRect(0, 0, b, c);
            this.Jh.drawImage(this.la, b - d - 1, 0);
            this.Jh.drawImage(this.la, -d - 1, 0)
        }
    }
    class ma {
        constructor() {
            this.vb =
                "";
            this.Jc = this.Mc = 0
        }
        Ae() {
            return JSON.stringify({
                lat: this.Jc,
                lon: this.Mc,
                code: this.vb
            })
        }
        static Mh(a) {
            return ma.eg(JSON.parse(a))
        }
        static eg(a) {
            let b = new ma;
            b.Jc = a.lat;
            b.Mc = a.lon;
            b.vb = a.code.toLowerCase();
            return b
        }
        static Zo() {
            return Y.Kk(m.Pe + "api/geo").then(function(a) {
                return ma.eg(a)
            })
        }
    }
    class Wb {
        constructor(a, b) {
            this.Vj = [];
            this.hr = /[#@][^\s@#]*$/;
            this.Pb = a;
            this.rq = b;
            a.hidden = !0
        }
        Uh() {
            this.ej(null)
        }
        ao(a, b) {
            b = this.hr.exec(O.substr(a, 0, b));
            if (null != b) {
                var c = b[0],
                    d = O.substr(c, 1, null).split(""),
                    e = Wb.Po,
                    f = Array(d.length);
                let g = 0,
                    h = d.length;
                for (; g < h;) {
                    let l = g++;
                    f[l] = e(d[l])
                }
                let k = new RegExp(f.join(".*?"), "i");
                this.Vk = "#" == c.charAt(0);
                this.Bi = b.index;
                this.vr = c.length;
                this.fm = a;
                a = function(l) {
                    l = k.exec(l.D);
                    return null == l ? -1 : l.index + l[0].length
                };
                b = [];
                c = 0;
                for (d = this.Vj; c < d.length;) e = d[c], ++c, f = a(e), 0 <= f && b.push({
                    wn: f,
                    item: e
                });
                b.sort(function(l, n) {
                    return l.wn - n.wn
                });
                this.ej(b)
            } else this.ej(null)
        }
        Dk(a) {
            a = this.Vk ? "#" + a.aa : "@" + Z.replace(a.D, " ", "_");
            this.rq(O.substr(this.fm, 0, this.Bi) + a + " " + O.substr(this.fm,
                this.Bi + this.vr, null), this.Bi + a.length + 1)
        }
        ej(a) {
            var b = null != a && 0 != a.length;
            this.Pb.hidden || x.Nf(this.Pb);
            this.dd = null;
            this.Pb.hidden = !b;
            if (b) {
                var c = this;
                b = [];
                for (var d = 0; d < a.length;) {
                    var e = a[d++];
                    let f = window.document.createElement("div"),
                        g = e.item;
                    e = g.D;
                    this.Vk && (e = "(" + g.aa + ") " + e);
                    f.textContent = e;
                    this.Pb.appendChild(f);
                    f.onclick = function() {
                        c.Dk(g)
                    };
                    b.push({
                        item: g,
                        Ja: f
                    })
                }
                this.dd = b;
                this.dd[0].Ja.classList.toggle("selected", !0);
                this.zc = 0
            }
        }
        dk(a) {
            if (null != this.dd) {
                var b = this.zc;
                this.zc += a;
                a = this.dd.length -
                    1;
                0 > this.zc ? this.zc = a : this.zc > a && (this.zc = 0);
                a = this.dd[this.zc];
                b != this.zc && (a.Ja.classList.toggle("selected", !0), this.dd[b].Ja.classList.toggle("selected", !1));
                a = a.Ja;
                b = a.offsetTop;
                a = b + a.offsetHeight;
                var c = this.Pb.scrollTop + this.Pb.clientHeight;
                b < this.Pb.scrollTop ? this.Pb.scrollTop = b : a > c && (this.Pb.scrollTop = a - this.Pb.clientHeight)
            }
        }
        Ko() {
            null != this.dd && (this.Dk(this.dd[this.zc].item), this.Uh())
        }
        static Po(a) {
            return -1 != ".$^{[(|)*+?\\".indexOf(a) ? "\\" + a : a
        }
    }
    class wa {}
    class pc {
        constructor(a) {
            this.f = a;
            let b = x.Aa(a);
            this.Un = b.get("sound-bar");
            this.qp = b.get("sound-icon");
            this.Tn = b.get("sound-bar-bg");
            let c = this;
            b.get("sound-btn").onclick = function() {
                m.j.ve.ta(!m.j.ve.A());
                c.B()
            };
            b.get("sound-slider").onmousedown = function(d) {
                function e(g) {
                    g.preventDefault();
                    {
                        let h = c.Tn.getBoundingClientRect();
                        g = (g.clientY - h.top) / h.height
                    }
                    g = 1 - g;
                    m.j.Si.ta(1 < g ? 1 : 0 > g ? 0 : g);
                    m.j.ve.ta(!0);
                    c.B()
                }
                e(d);
                let f = null;
                f = function(g) {
                    e(g);
                    a.classList.toggle("dragging", !1);
                    window.document.removeEventListener("mousemove", e, !1);
                    window.document.removeEventListener("mouseup",
                        f, !1)
                };
                a.classList.toggle("dragging", !0);
                window.document.addEventListener("mousemove", e, !1);
                window.document.addEventListener("mouseup", f, !1)
            };
            this.B()
        }
        B() {
            let a = m.j.Si.A(),
                b = !m.j.ve.A();
            if (this.Bp != a || this.Ap != b) this.Bp = a, (this.Ap = b) && (a = 0), this.qp.className = "icon-" + (0 >= a ? "volume-off" : .5 >= a ? "volume-down" : "volume-up"), this.Un.style.top = 100 * (1 - a) + "%", m.Na.zi()
        }
    }
    class Ma {
        constructor(a) {
            this.$f = null;
            this.Yk = this.Eh = !1;
            this.hd = window.performance.now();
            this.Od = null;
            this.Oe = 0;
            this.co = new Eb(3, 1E3);
            this.Ea =
                new lc;
            this.Lg = "Waiting for link";
            this.Hi = this.tm = !1;
            this.Bd = 0;
            let b = this;
            this.ag = new bc(a, function(d) {
                b.l.Oa.Ib(d)
            });
            this.ya = a;
            a.U.Eo = function(d) {
                b.tm != d && (b.tm = d, a.sa(Ha.na(d)))
            };
            this.l = new xa(a.xc);
            window.top.document.body.classList.add("hb-playing");
            this.Nh = new Zb(this.l, a.U.oa(a.xc).D);
            this.Nh.Ai(a.U);
            this.l.Oa.yl = M(this, this.fq);
            this.l.Oa.ug = M(this, this.eq);
            window.document.addEventListener("keydown", M(this, this.rb));
            window.document.addEventListener("keyup", M(this, this.Kd));
            window.onbeforeunload =
                function() {
                    return "Are you sure you want to leave the room?"
                };
            this.Ea.zg = function(d) {
                a.B();
                a.sa(d)
            };
            this.Ea.Zp = function(d) {
                "ToggleChat" == d && b.l.Oa.ns()
            };
            this.l.Wa.Bq = function(d) {
                a.sa(qa.na(1, d))
            };
            this.l.Wa.tq = function(d) {
                a.sa(qa.na(0, d))
            };
            this.l.Ag = function(d) {
                a.sa(Ea.na(d))
            };
            this.l.Wa.yq = function() {
                a.sa(new Ua)
            };
            this.l.Wa.zq = function() {
                a.sa(new Va)
            };
            this.l.Wa.mq = function() {
                b.Tm()
            };
            this.l.Wa.yg = function(d, e) {
                a.sa(fa.na(d, e))
            };
            this.l.Wa.le = M(this, this.wr);
            this.l.Wa.bq = function() {
                a.sa(new Xa)
            };
            this.l.Wa.pq =
                function() {
                    Ma.ar(a)
                };
            this.l.Wa.Aq = function(d) {
                a.sa(Fa.na(d))
            };
            this.l.Wa.tf = function(d) {
                let e = a.U.oa(d);
                if (null != e) {
                    let f = new sb(e, b.Hi);
                    f.qb = function() {
                        b.l.cb(null)
                    };
                    f.aq = function(g, h) {
                        a.sa(Ga.na(g, h))
                    };
                    f.mi = function() {
                        b.Yr(e)
                    };
                    b.l.cb(f.f, function() {
                        f.B(a.U, b.Hi)
                    })
                }
            };
            this.l.Wa.wq = function() {
                let d = new Jb;
                d.qb = function() {
                    b.l.cb(null)
                };
                b.l.cb(d.f, function() {
                    d.Qr(b.Lg)
                })
            };
            this.l.Wa.qq = function() {
                if (null == b.Od) b.cs();
                else {
                    let d = b.Od.stop();
                    b.Od = null;
                    Ma.qm(d)
                }
                b.l.Wa.Tr(null != b.Od)
            };
            window.requestAnimationFrame(M(this,
                this.pf));
            this.Lh = window.setInterval(function() {
                b.l.Gf.Am(b.Bd);
                b.Bd = 0
            }, 1E3);
            this.ws = window.setInterval(function() {
                a.B()
            }, 50);
            var c = m.j.Ad.A();
            c = -200 > c ? -200 : 1E3 < c ? 1E3 : c;
            0 != c && (a.zm(m.j.Ad.A()), this.l.Oa.Ib("Extrapolation set to " + c + " msec"))
        }
        cs() {
            this.Od = new gc(this.ya, 3)
        }
        Yr(a) {
            a = new Ib(a);
            let b = this;
            a.qb = function() {
                b.l.cb(null)
            };
            a.mi = function(c, d, e) {
                b.ya.sa(ka.na(c, d, e));
                b.l.cb(null)
            };
            this.l.cb(a.f)
        }
        ja() {
            window.document.removeEventListener("keydown", M(this, this.rb));
            window.document.removeEventListener("keyup",
                M(this, this.Kd));
            window.onbeforeunload = null;
            window.cancelAnimationFrame(this.Oe);
            window.top.document.body.classList.remove("hb-playing");
            this.Ea.ja();
            window.clearInterval(this.Lh);
            window.clearInterval(this.ws);
            window.clearTimeout(this.$f)
        }
        wr(a) {
            let b = [],
                c = 0,
                d = this.ya.U.K;
            for (; c < d.length;) {
                let e = d[c];
                ++c;
                e.ea == a && b.push(fa.na(e.X, u.Ma))
            }
            for (a = 0; a < b.length;) this.ya.sa(b[a++])
        }
        pf() {
            this.Oe = window.requestAnimationFrame(M(this, this.pf));
            this.Ea.B();
            this.ya.B();
            this.Rc()
        }
        Rc() {
            var a = window.performance.now();
            1 == m.j.Kh.A() && 28.333333333333336 > a - this.hd || (this.hd = a, this.Bd++, a = this.ya.U.oa(this.ya.xc), null != a && (this.Hi = a.eb), this.l.B(this.ya))
        }
        fq(a) {
            let b = this;
            this.ag.uf(a) || this.co.uo(function() {
                let c = new Ta;
                c.ad = a;
                b.ya.sa(c)
            })
        }
        eq(a) {
            this.Eh = a;
            let b = this;
            null == this.$f && (this.$f = window.setTimeout(function() {
                b.$f = null;
                b.um(b.Eh)
            }, 1E3), this.um(this.Eh))
        }
        um(a) {
            a != this.Yk && (this.ya.sa(Ba.na(a ? 0 : 1)), this.Yk = a)
        }
        Tm() {
            if (null != this.ya.U.M) {
                let a = new Wa;
                a.Mf = 120 != this.ya.U.M.Qa;
                this.ya.sa(a)
            }
        }
        rb(a) {
            var b = m.j.Ac;
            let c = null != m.j.me.A().A(a.code);
            switch (a.keyCode) {
                case 9:
                case 13:
                    this.l.Oa.Za.focus({
                        preventScroll: !0
                    });
                    a.preventDefault();
                    break;
                case 27:
                    this.l.vp() ? this.l.cb(null) : (b = this.l, b.ue(!b.nd));
                    a.preventDefault();
                    break;
                case 48:
                    c ? this.Ea.rb(a) : b.ta(0);
                    break;
                case 49:
                    c ? this.Ea.rb(a) : b.ta(1);
                    break;
                case 50:
                    c ? this.Ea.rb(a) : b.ta(2);
                    break;
                case 51:
                    c ? this.Ea.rb(a) : b.ta(3);
                    break;
                case 52:
                    c ? this.Ea.rb(a) : b.ta(4);
                    break;
                case 53:
                    c ? this.Ea.rb(a) : b.ta(5);
                    break;
                case 54:
                    c ? this.Ea.rb(a) : b.ta(6);
                    break;
                case 55:
                    c ? this.Ea.rb(a) :
                        b.ta(7);
                    break;
                case 80:
                    this.Tm();
                    break;
                default:
                    this.Ea.rb(a)
            }
        }
        Kd(a) {
            this.Ea.Kd(a)
        }
        static qm(a) {
            let b = new Date;
            Ob.Br(a, "HBReplay-" + b.getFullYear() + "-" + Z.Lf("" + (b.getMonth() + 1)) + "-" + Z.Lf("" + b.getDate()) + "-" + Z.Lf("" + b.getHours()) + "h" + Z.Lf("" + b.getMinutes()) + "m.hbr2")
        }
        static ar(a) {
            var b = a.U.K;
            let c = [];
            var d = 0;
            let e = 0;
            for (var f = 0; f < b.length;) {
                let g = b[f];
                ++f;
                g.ea == u.Ma && c.push(g.X);
                g.ea == u.ga ? ++d : g.ea == u.Ca && ++e
            }
            f = c.length;
            0 != f && (b = function() {
                return c.splice(Math.random() * c.length | 0, 1)[0]
            }, e == d ? 2 > f || (a.sa(fa.na(b(),
                u.ga)), a.sa(fa.na(b(), u.Ca))) : (d = e > d ? u.ga : u.Ca, a.sa(fa.na(b(), d))))
        }
    }
    class P {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
    }
    class Db {
        constructor() {
            this.S = 0;
            this.we = 1 / 0;
            this.Jb = this.fc = 100;
            this.fe = this.ge = 0
        }
        fa(a) {
            a.m(this.fe);
            a.m(this.ge);
            a.u(this.Jb);
            a.u(this.fc);
            a.u(this.we);
            a.P(this.S)
        }
        ka(a) {
            this.fe = a.F();
            this.ge = a.F();
            this.Jb = a.v();
            this.fc = a.v();
            this.we = a.v();
            this.S = a.N()
        }
        B(a) {
            var b = a[this.fe];
            a = a[this.ge];
            if (null != b && null != a) {
                var c = b.a,
                    d = a.a,
                    e = c.x - d.x;
                c = c.y - d.y;
                var f = Math.sqrt(e * e + c * c);
                if (!(0 >= f)) {
                    e /= f;
                    c /= f;
                    d = b.ba / (b.ba + a.ba);
                    d != d && (d = .5);
                    if (this.Jb >= this.fc) {
                        var g = this.Jb;
                        var h = 0
                    } else if (f <= this.Jb) g = this.Jb, h = 1;
                    else if (f >= this.fc) g = this.fc, h = -1;
                    else return;
                    f = g - f;
                    if (0 == 0 * this.we) d = this.we * f * .5, e *= d, c *= d, h = d = b.G, b = b.ba, d.x = h.x + e * b, d.y = h.y + c * b, d = b = a.G, a = a.ba, b.x = d.x + -e * a, b.y = d.y + -c * a;
                    else {
                        g = f * d;
                        var k = b.a,
                            l = b.a;
                        k.x = l.x + e * g * .5;
                        k.y = l.y + c * g * .5;
                        l = k = a.a;
                        f -= g;
                        k.x = l.x - e * f * .5;
                        k.y = l.y - c * f * .5;
                        f = b.G;
                        g = a.G;
                        f = e * (f.x - g.x) + c * (f.y - g.y);
                        0 >= f * h && (d *= f, b = h = b.G, h.x = b.x - e * d, h.y = b.y - c * d, a = b = a.G, d = f - d, b.x = a.x + e * d, b.y = a.y +
                            c * d)
                    }
                }
            }
        }
    }
    class Fb {
        constructor() {
            this.f = x.Ha(Fb.O);
            let a = x.Aa(this.f),
                b = this;
            a.get("cancel").onclick = function() {
                D.i(b.qb, !1)
            };
            a.get("leave").onclick = function() {
                D.i(b.qb, !0)
            }
        }
    }
    class nc {
        constructor() {
            this.Xc = 0;
            this.bb = [];
            this.ds = new ea(["Time is", "Up!"], 16777215);
            this.fr = new ea(["Red is", "Victorious!"], 15035990);
            this.er = new ea(["Red", "Scores!"], 15035990);
            this.Wn = new ea(["Blue is", "Victorious!"], 625603);
            this.Vn = new ea(["Blue", "Scores!"], 625603);
            this.Eq = new ea(["Game", "Paused"], 16777215)
        }
        Ra(a) {
            this.bb.push(a)
        }
        io() {
            this.bb = [];
            this.Xc = 0
        }
        B(a) {
            0 < this.bb.length && (this.Xc += a) > this.bb[0].To() && (this.Xc = 0, this.bb.shift())
        }
        Rc(a) {
            0 < this.bb.length && this.bb[0].Rc(a, this.Xc)
        }
    }
    class Vb {
        constructor() {
            this.df = 0;
            this.V = 15;
            this.w = 0;
            this.pa = new P(0, 0);
            this.ba = this.o = .5;
            this.Da = .96;
            this.Ne = .1;
            this.ef = .07;
            this.ff = .96;
            this.cf = 5
        }
        fa(a) {
            a.u(this.o);
            a.u(this.ba);
            a.u(this.Da);
            a.u(this.Ne);
            a.u(this.ef);
            a.u(this.ff);
            a.u(this.cf);
            let b = this.pa;
            a.u(b.x);
            a.u(b.y);
            a.P(this.w);
            a.u(this.V);
            a.u(this.df)
        }
        ka(a) {
            this.o = a.v();
            this.ba = a.v();
            this.Da = a.v();
            this.Ne = a.v();
            this.ef = a.v();
            this.ff = a.v();
            this.cf = a.v();
            let b = this.pa;
            b.x = a.v();
            b.y = a.v();
            this.w = a.N();
            this.V = a.v();
            this.df = a.v()
        }
    }
    class Sa extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.no(this.$g)
        }
        va(a) {
            a.mb(this.$g.byteLength);
            a.Vg(this.$g)
        }
        wa(a) {
            this.$g = a.Wl(a.Cb())
        }
    }
    class oa extends W {
        constructor(a) {
            W.zb ? super() : (W.zb = !0, super(), W.zb = !1, this.Ya(a))
        }
        Ya(a) {
            this.bj = new eb;
            this.Be = this.ec = 0;
            this.te = new eb;
            this.xc = this.dc = this.Ad = 0;
            this.Ec = .06;
            this.qh = 16.666666666666668;
            this.Sf = 120;
            super.Ya(a)
        }
        sa() {
            throw v.C("missing implementation");
        }
        fg() {
            throw v.C("missing implementation");
        }
        B() {
            throw v.C("missing implementation");
        }
        Nj(a) {
            let b = this.te.list,
                c = 0,
                d = b.length,
                e = 0;
            for (; e < a;) {
                for (++e; c < d;) {
                    let f = b[c];
                    if (f.nb != this.$) break;
                    f.apply(this.U);
                    null != this.hc && this.hc(f);
                    this.ec++;
                    ++c
                }
                this.U.B(1);
                this.Be += this.ec;
                this.ec = 0;
                this.$++
            }
            for (; c < d;) {
                a = b[c];
                if (a.nb != this.$ || a.Dc != this.ec) break;
                a.apply(this.U);
                null != this.hc && this.hc(a);
                this.ec++;
                ++c
            }
            b.splice(0, c)
        }
        Mg(a) {
            a.nb == this.$ && a.Dc <= this.ec ? (a.Dc = this.ec++, a.apply(this.U), null != this.hc && this.hc(a)) :
                this.te.jn(a)
        }
        Nk(a, b) {
            if (0 >= a) return this.U;
            a > this.Sf && (a = this.Sf);
            wa.Cc++;
            let c = this.U.uc();
            null != b ? (this.bj.Is(this.te, b), b = this.bj) : b = this.te;
            b = b.list;
            let d = 0,
                e = b.length,
                f = this.$,
                g = a | 0,
                h = f + g;
            for (; f <= h;) {
                for (; d < e;) {
                    let k = b[d];
                    if (k.nb > f) break;
                    k.Kf.Ba && k.apply(c);
                    ++d
                }
                c.B(f != h ? 1 : a - g);
                ++f
            }
            for (a = this.bj.list; 0 < a.length;) a.pop();
            return c
        }
        Nr(a) {
            300 < a && (a = 300);
            0 > a && (a = 0);
            this.dc = this.Ec * a | 0
        }
        zm(a) {
            this.Ad = this.Ec * (-200 > a ? -200 : 1E3 < a ? 1E3 : a)
        }
    }
    class Na extends oa {
        constructor(a, b) {
            W.zb = !0;
            super();
            W.zb = !1;
            this.Ya(a,
                b)
        }
        Ya(a, b) {
            this.Ni = [];
            this.yi = [];
            this.Fg = new eb;
            this.Xp = 1;
            this.yd = this.Rm = 0;
            this.aj = new ec(50);
            this.Eg = new ec(50);
            this.En = 1E3;
            this.wk = "";
            super.Ya(b.state);
            this.Zh = b.rt;
            this.Ue = b.Ls;
            let c = null,
                d = this;
            c = function(e) {
                d.Ff(0);
                let f = A.ia();
                f.Wb(b.version);
                f.Fb(b.password);
                d.rc = new dc(b.tj, b.iceServers, a, uc.channels, f, b.zn);
                d.rc.th = e;
                d.rc.Id = function(h) {
                    d.rc = null;
                    d.qa = h;
                    h.xg = function(k) {
                        k = new J(new DataView(k));
                        d.Uq(k)
                    };
                    h.qf = function() {
                        3 != d.yd && D.i(d.rf, ia.Qf("Connection closed"));
                        d.ja()
                    };
                    h = window.setTimeout(function() {
                        D.i(d.rf,
                            ia.Qf("Game state timeout"));
                        d.ja()
                    }, 1E4);
                    d.ze = h;
                    d.Ff(2)
                };
                d.rc.zl = function() {
                    d.Ff(1)
                };
                let g = !1;
                d.rc.rl = function() {
                    g = !0
                };
                d.rc.kd = function(h) {
                    if (!e && 1 == d.yd && g) H.i(d.sq), c(!0);
                    else {
                        let k = dc.Xo(h);
                        switch (h.ob) {
                            case 0:
                                h = ia.Je;
                                break;
                            case 1:
                                h = ia.Ke(h.code);
                                break;
                            case 2:
                                h = ia.Ie;
                                break;
                            default:
                                h = ia.Qf(k)
                        }
                        D.i(d.rf, h);
                        d.ja(k)
                    }
                }
            };
            c(null != b.vn && b.vn)
        }
        ja(a) {
            null != this.rc && (this.rc.kd = null, this.rc.$n(), this.rc = null);
            window.clearTimeout(this.ze);
            null != this.qa && (this.qa.qf = null, this.qa.ja(), this.qa = null);
            this.wk =
                null == a ? "Connection closed" : a;
            this.Ff(4)
        }
        Ff(a) {
            this.yd != a && (this.yd = a, null != this.Jd && this.Jd(a))
        }
        Fd() {
            return 3 == this.yd
        }
        B() {
            this.Fd() && window.performance.now() - this.Rm > this.En && this.Ji();
            this.ed = window.performance.now() * this.Ec + this.aj.jh() - this.$;
            this.bk()
        }
        fg() {
            return this.Fd() ? (0 > this.dc && (this.dc = 0), this.Nk(window.performance.now() * this.Ec + this.aj.jh() - this.$ + this.dc + this.Ad, this.Fg)) : this.U
        }
        bk() {
            0 > this.ed && (this.ed = 0);
            this.ed > this.Sf && (this.ed = this.Sf)
        }
        Uq(a) {
            switch (a.F()) {
                case 0:
                    this.Rq(a);
                    break;
                case 1:
                    this.Qq(a);
                    break;
                case 2:
                    this.Nq(a);
                    break;
                case 3:
                    this.Wq(a);
                    break;
                case 4:
                    this.Tq(a);
                    break;
                case 5:
                    this.Pq(a);
                    break;
                case 6:
                    this.Vq(a)
            }
        }
        Rq(a) {
            a = a.tb(a.Cb());
            let b = Promise.resolve(null);
            null != this.Ue && (b = this.Ue.Zr(a));
            let c = this;
            b.catch(function() {
                return null
            }).then(function(d) {
                c.Jr(d)
            })
        }
        Qq(a) {
            a = pako.inflateRaw(a.tb());
            a = new J(new DataView(a.buffer, a.byteOffset, a.byteLength));
            this.xc = a.Rb();
            this.$ = a.ib();
            this.Be = a.ib();
            this.ec = a.Cb();
            this.ed = 10;
            for (this.U.ka(a); 0 < a.s.byteLength - a.a;) this.Mg(this.Ym(a));
            window.clearTimeout(this.ze);
            this.Ff(3)
        }
        Jr(a) {
            let b = A.ia();
            b.m(0);
            null != a ? (b.mb(a.byteLength), b.Xb(a)) : b.mb(0);
            b.mb(this.Zh.byteLength);
            b.Vg(this.Zh);
            this.Ub(b);
            this.Zh = null
        }
        Ub(a, b) {
            null == b && (b = 0);
            this.qa.Ub(b, a)
        }
        Ym(a) {
            let b = a.ib(),
                c = a.Cb(),
                d = a.Rb(),
                e = a.ib();
            a = p.oh(a);
            a.R = d;
            a.Ce = e;
            a.nb = b;
            a.Dc = c;
            return a
        }
        Nq(a) {
            a = this.Ym(a);
            this.Mg(a);
            a.R == this.xc && this.Fg.jt(a.Ce);
            this.Ul()
        }
        Vq(a) {
            a = p.oh(a);
            a.R = 0;
            a.Ce = 0;
            a.apply(this.U);
            null != this.hc && this.hc(a)
        }
        Wq(a) {
            let b = a.ib();
            a = a.ib();
            this.yi.push({
                frame: b,
                Jf: a
            });
            this.Ul()
        }
        Ul() {
            if (3 == this.yd) {
                for (var a = 0, b = this.yi; a < b.length;) {
                    var c = b[a];
                    ++a;
                    c.frame <= this.$ || c.Jf == this.Be + this.ec + this.te.Js(c.frame) && this.Nn(c.frame - this.$)
                }
                a = 0;
                b = this.yi;
                c = 0;
                for (var d = b.length; c < d;) {
                    let e = b[c++];
                    e.frame > this.$ && (b[a] = e, ++a)
                }
                for (; b.length > a;) b.pop();
                this.Fg.it(this.$)
            }
        }
        Pq(a) {
            let b = 0 != a.F(),
                c = a.kc(),
                d = "";
            0 < a.s.byteLength - a.a && (d = a.kc());
            a = b ? "You were banned" : "You were kicked";
            "" != d && (a += " by " + d);
            "" != c && (a += " (" + c + ")");
            this.ja(a)
        }
        Tq(a) {
            var b = a.v();
            a = a.v();
            let c = window.performance.now() -
                a;
            this.aj.add(b - a * this.Ec);
            this.Eg.add(c);
            let d = b = 0,
                e = this.Ni;
            for (; d < e.length;) {
                let f = e[d];
                ++d;
                if (f > a) break;
                f < a ? D.i(this.wl, -1) : D.i(this.wl, c);
                ++b
            }
            this.Ni.splice(0, b)
        }
        Ji() {
            let a = window.performance.now();
            this.Rm = a;
            this.Ni.push(a);
            let b = this.Eg.jh() | 0,
                c = A.ia();
            c.m(2);
            c.u(a);
            c.mb(b);
            this.Ub(c, 2)
        }
        Nn(a) {
            this.Nj(a);
            this.ed -= a;
            this.bk()
        }
        sa(a) {
            if (3 == this.yd) {
                var b = this.Xp++,
                    c = 0;
                0 > this.dc && (this.dc = 0);
                a.Kf.delay && (c = this.$ + (this.ed | 0) + this.dc);
                var d = A.ia();
                d.m(1);
                d.ub(c);
                d.ub(b);
                p.vj(a, d);
                this.Ub(d);
                a.Kf.Ba &&
                    (a.Ce = b, a.R = this.xc, a.nb = c, this.Fg.jn(a))
            }
        }
        static Ch(a) {
            switch (a.ob) {
                case 0:
                    return "Cancelled";
                case 1:
                    return "Failed to connect to peer.";
                case 2:
                    return Kc.description(a.reason);
                case 3:
                    return a.description
            }
        }
    }
    class Rb extends oa {
        constructor(a) {
            W.zb = !0;
            super();
            W.zb = !1;
            this.Ya(a)
        }
        Ya(a) {
            this.Yj = new Map;
            this.Kb = null;
            this.rg = 32;
            this.Te = new Map;
            this.cc = [];
            this.Gi = 2;
            this.ho = 600;
            super.Ya(a.state);
            this.Rp = a.tj;
            this.ys = a.version;
            this.Sp = 1;
            this.Zk = this.xc = 0;
            this.Wi = window.performance.now();
            this.Oc = new Lb(this.Rp,
                a.iceServers, uc.channels, a.zn);
            this.Oc.lk = M(this, this.ip);
            let b = this;
            this.Oc.ul = function(c) {
                b.lq(c)
            };
            this.Oc.wg = function(c) {
                D.i(b.wg, c)
            };
            this.Oc.sf = function(c, d) {
                null != b.sf && b.sf(c, d)
            }
        }
        ja() {
            this.Oc.ja();
            let a = 0,
                b = this.cc;
            for (; a < b.length;) {
                let c = b[a++].qa;
                c.qf = null;
                c.xg = null;
                c.ja()
            }
        }
        No(a, b, c, d) {
            let e = this.Te.get(a);
            if (null != e) {
                if (d) {
                    let f = this.Oc.Rn(e.qa);
                    this.Yj.set(a, f)
                }
                a = A.ia();
                a.m(5);
                a.m(d ? 1 : 0);
                a.oc(b);
                null == c && (c = "");
                a.oc(c);
                e.Ub(a);
                e.qa.ja()
            }
        }
        be() {
            this.Oc.be();
            this.Yj.clear()
        }
        Pi(a) {
            this.Oc.Pi(a)
        }
        Oi(a) {
            this.Oc.Oi(a)
        }
        sa(a) {
            a.R =
                0;
            let b = this.$ + this.Gi + this.dc;
            a.Kf.delay || (b = this.$);
            a.nb = b;
            this.Mg(a);
            this.Mi();
            0 < this.cc.length && this.Ng(this.gi(a), 1)
        }
        B() {
            let a = ((window.performance.now() - this.Wi) * this.Ec | 0) - this.$;
            0 < a && this.Nj(a);
            7 <= this.$ - this.$k && this.Mi();
            this.$ - this.Zk >= this.ho && (this.Mi(), this.Hr())
        }
        fg() {
            0 > this.dc && (this.dc = 0);
            return this.Nk((window.performance.now() - this.Wi) * this.Ec - this.$ + this.Gi + this.dc + this.Ad)
        }
        ip(a, b) {
            if (this.cc.length >= this.rg) return fb.Rf(4100);
            try {
                if (b.Rb() != this.ys) throw v.C(null);
            } catch (c) {
                return fb.Rf(4103)
            }
            try {
                let c =
                    b.Bb();
                if (null != this.Kb && c != this.Kb) throw v.C(null);
            } catch (c) {
                return fb.Rf(4101)
            }
            return fb.Fj
        }
        lq(a) {
            if (this.cc.length >= this.rg) a.ja();
            else {
                var b = new oc(a);
                this.cc.push(b);
                var c = this;
                a.xg = function(d) {
                    d = new J(new DataView(d));
                    c.Oq(d, b)
                };
                a.qf = function() {
                    O.remove(c.cc, b);
                    c.Te.delete(b.aa);
                    D.i(c.hq, b.aa)
                };
                a = A.ia(1 + b.Se.byteLength);
                a.m(0);
                a.mb(b.Se.byteLength);
                a.Xb(b.Se);
                b.Ub(a)
            }
        }
        gi(a) {
            let b = A.ia();
            b.m(2);
            this.Bl(a, b);
            return b
        }
        Bl(a, b) {
            b.ub(a.nb);
            b.mb(a.Dc);
            b.Wb(a.R);
            b.ub(a.Ce);
            p.vj(a, b)
        }
        Mi() {
            if (!(0 >= this.$ -
                    this.$k) && 0 != this.cc.length) {
                var a = A.ia();
                a.m(3);
                a.ub(this.$);
                a.ub(this.Be);
                this.Ng(a, 2);
                this.$k = this.$
            }
        }
        Ng(a, b) {
            null == b && (b = 0);
            let c = 0,
                d = this.cc;
            for (; c < d.length;) {
                let e = d[c];
                ++c;
                e.Jg && e.Ub(a, b)
            }
        }
        Ir(a) {
            let b = A.ia();
            b.m(1);
            let c = A.ia();
            c.Wb(a.aa);
            c.ub(this.$);
            c.ub(this.Be);
            c.mb(this.ec);
            this.U.fa(c);
            let d = this.te.list,
                e = 0,
                f = d.length;
            for (; e < f;) this.Bl(d[e++], c);
            b.Xb(pako.deflateRaw(c.Vb()));
            a.Ub(b)
        }
        Hr() {
            this.Zk = this.$;
            if (0 != this.cc.length) {
                var a = new Sa;
                a.nb = this.$;
                a.Dc = this.ec++;
                a.R = 0;
                a.$g = this.U.Uo();
                this.Ng(this.gi(a))
            }
        }
        Yq(a, b) {
            let c = a.tb(a.Cb()),
                d = a.tb(a.Cb());
            a = b.Se;
            b.Se = null;
            let e = this;
            U.xs(c, a).catch(function() {
                return null
            }).then(function(f) {
                try {
                    if (-1 != e.cc.indexOf(b)) {
                        b.st = f;
                        var g = e.Sp++;
                        b.aa = g;
                        e.Te.set(g, b);
                        Aa.i(e.gq, g, new J(new DataView(d.buffer, d.byteOffset, d.byteLength), !1));
                        b.Jg = !0;
                        e.Ir(b)
                    }
                } catch (h) {
                    f = v.Lb(h).Gb(), e.Ok(b, f)
                }
            })
        }
        Oq(a, b) {
            this.B();
            try {
                if (!b.ap.Um()) throw v.C(1);
                let c = a.F();
                if (b.Jg) switch (c) {
                        case 1:
                            this.Zq(a, b);
                            break;
                        case 2:
                            this.Sq(a, b);
                            break;
                        default:
                            throw v.C(0);
                    } else if (0 ==
                        c) this.Yq(a, b);
                    else throw v.C(0);
                if (0 < a.s.byteLength - a.a) throw v.C(2);
            } catch (c) {
                this.Ok(b, v.Lb(c).Gb())
            }
        }
        Ok(a, b) {
            pa.console.log(b);
            this.Te.delete(a.aa);
            O.remove(this.cc, a);
            a.Jg && null != this.sl && this.sl(a.aa);
            a.qa.ja()
        }
        Sq(a, b) {
            let c = a.v();
            b.Ab = a.Cb();
            a = A.ia();
            a.m(4);
            a.u((window.performance.now() - this.Wi) * this.Ec + this.Gi);
            a.u(c);
            b.Ub(a, 2)
        }
        Zq(a, b) {
            let c = a.ib(),
                d = a.ib();
            a = p.oh(a);
            var e = a.Kf.xj;
            if (null != e) {
                var f = b.Lj.get(e);
                null == f && (f = new Eb(e.kj, e.Dj), b.Lj.set(e, f));
                if (!f.Um()) throw v.C(3);
            }
            e = this.$;
            f = this.$ + 20;
            c < e ? c = e : c > f && (c = f);
            a.Ce = d;
            a.R = b.aa;
            a.nb = c;
            a.sn(this.U) && (this.Mg(a), this.Ng(this.gi(a), 1))
        }
    }
    class Sb extends oa {
        constructor(a, b, c) {
            W.zb = !0;
            super();
            W.zb = !1;
            this.Ya(a, b, c)
        }
        Ya(a, b, c) {
            this.kl = [];
            this.Il = 5;
            this.Pd = -1;
            this.tg = this.Tb = this.ai = this.Jk = 0;
            super.Ya(b);
            a = new J(new DataView(a.buffer), !1);
            if (1212305970 != a.ib()) throw v.C("");
            b = a.ib();
            if (c != b) throw v.C(new Tb(b));
            this.yf = a.ib();
            c = pako.inflateRaw(a.tb());
            this.Sc = new J(new DataView(c.buffer, c.byteOffset, c.byteLength));
            this.br(this.Sc);
            c = this.Sc.tb();
            this.Sc = new J(new DataView(c.buffer, c.byteOffset, c.byteLength), !1);
            this.Di();
            this.ai = window.performance.now();
            this.xc = -1
        }
        br(a) {
            let b = a.Rb(),
                c = 0,
                d = 0;
            for (; d < b;) {
                ++d;
                c += a.Cb();
                let e = a.F();
                this.kl.push({
                    wj: c / this.yf,
                    kind: e
                })
            }
        }
        Xl() {
            var a = this.Sc;
            0 < a.s.byteLength - a.a ? (a = this.Sc.Cb(), this.tg += a, a = this.Sc.Rb(), this.sg = p.oh(this.Sc), this.sg.R = a) : this.sg = null
        }
        $o() {
            return this.$ / this.yf
        }
        sa() {}
        fg() {
            this.B();
            wa.Cc++;
            let a = this.U.uc();
            a.B(this.Jk);
            return a
        }
        B() {
            var a = window.performance.now(),
                b = a -
                this.ai;
            this.ai = a;
            0 < this.Pd ? (this.Tb += 1E4, this.Tb > this.Pd && (this.Tb = this.Pd, this.Pd = -1)) : this.Tb += b * this.Il;
            a = this.yf * this.qh;
            this.Tb > a && (this.Tb = a);
            b = this.Tb * this.Ec;
            a = b | 0;
            for (this.Jk = b - a; this.$ < a;) {
                for (; null != this.sg && this.tg == this.$;) b = this.sg, b.apply(this.U), null != this.hc && this.hc(b), this.Xl();
                this.$++;
                this.U.B(1)
            }
        }
        Fr(a) {
            this.Pd = a;
            a < this.Tb && this.Di()
        }
        Di() {
            this.tg = 0;
            this.Tb = this.$ = this.Sc.a = 0;
            this.U.ka(this.Sc);
            this.Xl()
        }
    }
    class Ha extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.oa(this.R);
            null !=
                b && this.hh != b.Td && (b.Td = this.hh, D.i(a.Ll, b))
        }
        va(a) {
            a.m(this.hh ? 1 : 0)
        }
        wa(a) {
            this.hh = 0 != a.F()
        }
        static na(a) {
            let b = new Ha;
            b.hh = a;
            return b
        }
    }
    class mb extends p {
        constructor() {
            super()
        }
        apply(a) {
            0 == this.R && Nb.i(a.nm, this.ad, this.color, this.style, this.yn)
        }
        va(a) {
            a.oc(ha.Yc(this.ad, 1E3));
            a.P(this.color);
            a.m(this.style);
            a.m(this.yn)
        }
        wa(a) {
            this.ad = a.kc();
            if (1E3 < this.ad.length) throw v.C("message too long");
            this.color = a.N();
            this.style = a.F();
            this.yn = a.F()
        }
    }
    class Xa extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Ob(this.R)) {
                for (var b =
                        a.oa(this.R), c = a.K, d = [], e = 0, f = 0, g = 0; g < c.length;) {
                    let h = c[g];
                    ++g;
                    h.ea == u.Ma && d.push(h);
                    h.ea == u.ga ? ++e : h.ea == u.Ca && ++f
                }
                c = d.length;
                0 != c && (f == e ? 2 > c || (a.Zf(b, d[0], u.ga), a.Zf(b, d[1], u.Ca)) : a.Zf(b, d[0], f > e ? u.ga : u.Ca))
            }
        }
        va() {}
        wa() {}
    }
    class qa extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Ob(this.R) && null == a.M) switch (this.Aj) {
                case 0:
                    var b = this.newValue;
                    a.jb = 0 > b ? 0 : 99 < b ? 99 : b;
                    break;
                case 1:
                    b = this.newValue, a.Fa = 0 > b ? 0 : 99 < b ? 99 : b
            }
        }
        va(a) {
            a.P(this.Aj);
            a.P(this.newValue)
        }
        wa(a) {
            this.Aj = a.N();
            this.newValue = a.N()
        }
        static na(a,
            b) {
            let c = new qa;
            c.Aj = a;
            c.newValue = b;
            return c
        }
    }
    class Ga extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Ob(this.R)) {
                var b = a.oa(this.R),
                    c = a.oa(this.Ud);
                null != c && 0 != c.X && c.eb != this.gh && (c.eb = this.gh, null != a.ri && a.ri(b, c))
            }
        }
        va(a) {
            a.P(this.Ud);
            a.m(this.gh ? 1 : 0)
        }
        wa(a) {
            this.Ud = a.N();
            this.gh = 0 != a.F()
        }
        static na(a, b) {
            let c = new Ga;
            c.Ud = a;
            c.gh = b;
            return c
        }
    }
    class Ja extends p {
        constructor() {
            super()
        }
        apply(a) {
            a = a.oa(this.R);
            null != a && (a.Zb = this.ac)
        }
        va(a) {
            a.Fb(this.ac)
        }
        wa(a) {
            this.ac = a.Bb();
            null != this.ac && (this.ac = ha.Yc(this.ac,
                2))
        }
        static na(a) {
            let b = new Ja;
            b.ac = a;
            return b
        }
    }
    class fa extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.oa(this.Ud);
            if (null != b) {
                var c = a.oa(this.R),
                    d = a.Ob(this.R);
                (d = d || b == c && !a.Wc && null == a.M) && a.Zf(c, b, this.uj)
            }
        }
        va(a) {
            a.P(this.Ud);
            a.m(this.uj.aa)
        }
        wa(a) {
            this.Ud = a.N();
            a = a.wf();
            this.uj = 10 == a ? u.ga : 12 == a ? u.Ca : u.Ma
        }
        static na(a, b) {
            let c = new fa;
            c.Ud = a;
            c.uj = b;
            return c
        }
    }
    class Ea extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Ob(this.R)) {
                var b = a.oa(this.R);
                null == a.M && (a.T = this.Xd, null != a.Ti && a.Ti(b, this.Xd))
            }
        }
        va(a) {
            var b =
                A.ia();
            this.Xd.fa(b);
            b = pako.deflateRaw(b.Vb());
            a.Wb(b.byteLength);
            a.Xb(b)
        }
        wa(a) {
            a = pako.inflateRaw(a.tb(a.Rb()));
            this.Xd = q.ka(new J(new DataView(a.buffer, a.byteOffset, a.byteLength)))
        }
        static na(a) {
            let b = new Ea;
            b.Xd = a;
            return b
        }
    }
    class Ya extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.Ob(this.R) && this.ea != u.Ma && (a.lb[this.ea.aa] = this.ah)
        }
        va(a) {
            a.m(this.ea.aa);
            this.ah.fa(a)
        }
        wa(a) {
            let b = a.wf();
            this.ea = 200 == b ? u.ga : 200 == b ? u.Ca : u.Ma;
            this.ah = new va;
            this.ah.ka(a)
        }
    }
    class Fa extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.Ob(this.R) &&
                (a.Wc = this.newValue)
        }
        va(a) {
            a.m(this.newValue ? 100 : 120)
        }
        wa(a) {
            this.newValue = 220 != a.F()
        }
        static na(a) {
            let b = new Fa;
            b.newValue = a;
            return b
        }
    }
    class Da extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.R) {
                var b = new ua;
                b.X = this.X;
                b.D = this.name;
                b.country = this.nj;
                b.Zb = this.Zb;
                a.K.push(b);
                a = a.Ml;
                null != a && a(b)
            }
        }
        va(a) {
            a.P(this.X);
            a.Fb(this.name);
            a.Fb(this.nj);
            a.Fb(this.Zb)
        }
        wa(a) {
            this.X = a.N();
            this.name = a.Bb();
            this.nj = a.Bb();
            this.Zb = a.Bb()
        }
        static na(a, b, c, d) {
            let e = new Da;
            e.X = a;
            e.name = b;
            e.nj = c;
            e.Zb = d;
            return e
        }
    }
    class ob extends p {
        constructor() {
            super()
        }
        apply(a) {
            a =
                a.oa(this.Ge);
            null != a && 110 == this.R && (a.Sd = this.ac)
        }
        va(a) {
            a.Fb(this.ac);
            a.P(this.Ge)
        }
        wa(a) {
            this.ac = a.Bb();
            this.Ge = a.N();
            null != this.ac && (this.ac = ha.Yc(this.ac, 2))
        }
    }
    class Wa extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.M;
            if (null != b && a.Ob(this.R)) {
                var c = a.oa(this.R),
                    d = 300 == b.Qa,
                    e = 110 < b.Qa;
                this.Mf ? b.Qa = 300 : 300 == b.Qa && (b.Qa = 400);
                d != this.Mf && tc.i(a.Fl, c, this.Mf, e)
            }
        }
        va(a) {
            a.m(this.Mf ? 1 : 0)
        }
        wa(a) {
            this.Mf = 0 != a.F()
        }
    }
    class Ta extends p {
        constructor() {
            super()
        }
        sn(a) {
            if (null != a.Hq) {
                let b = a.oa(this.R);
                return null ==
                    b ? !11 : a.Hq(b, this.ad)
            }
            return !11
        }
        apply(a) {
            let b = a.oa(this.R);
            null != b && Aa.i(a.Kl, b, this.ad)
        }
        va(a) {
            a.oc(ha.Yc(this.ad, 300))
        }
        wa(a) {
            this.ad = a.kc();
            if (300 < this.ad.length) throw v.C("message too long");
        }
    }
    class Ca extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.oa(this.R);
            if (null != b) {
                var c = this.input;
                4 == (b.Ea & 50) && 4 != (c & 50) && (b.Yb = !4);
                b.Ea = c;
                null != a.Iq && a.Iq(b)
            }
        }
        va(a) {
            a.ub(this.input)
        }
        wa(a) {
            this.input = a.ib()
        }
    }
    class Ba extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.oa(this.R);
            null != b && Aa.i(a.Pl, b, this.Bj)
        }
        va(a) {
            a.m(this.Bj)
        }
        wa(a) {
            this.Bj =
                a.F()
        }
        static na(a) {
            let b = new Ba;
            b.Bj = a;
            return b
        }
    }
    class ka extends p {
        constructor() {
            p.zb = !3;
            super();
            p.zb = !3;
            this.Ya()
        }
        Ya() {
            this.Zg = !3;
            super.Ya()
        }
        apply(a) {
            if (0 != this.X && a.Ob(this.R)) {
                var b = a.oa(this.X);
                if (null != b) {
                    var c = a.oa(this.R);
                    O.remove(a.K, b);
                    null != a.M && O.remove(a.M.ua.H, b.J);
                    Nb.i(a.Nl, b, this.pd, this.Zg, c)
                }
            }
        }
        va(a) {
            null != this.pd && (this.pd = ha.Yc(this.pd, 200));
            a.P(this.X);
            a.Fb(this.pd);
            a.m(this.Zg ? 4 : 0)
        }
        wa(a) {
            this.X = a.N();
            this.pd = a.Bb();
            this.Zg = 0 != a.F();
            if (null != this.pd && 100 < this.pd.length) throw v.C("string too long");
        }
        static na(a, b, c) {
            let d = new ka;
            d.X = a;
            d.pd = b;
            d.Zg = c;
            return d
        }
    }
    class nb extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.R) {
                for (var b = new Map, c = 0, d = a.K; c < d.length;) {
                    var e = d[c];
                    ++c;
                    b.set(e.X, e)
                }
                c = [];
                d = 0;
                for (e = this.ih; d < e.length;) {
                    var f = e[d];
                    ++d;
                    let g = b.get(f);
                    null != g && (b.delete(f), c.push(g))
                }
                d = [];
                b = b.values();
                for (e = b.next(); !e.done;) f = e.value, e = b.next(), d.push(f);
                a.K = this.rn ? c.concat(d) : d.concat(c)
            }
        }
        va(a) {
            a.m(this.rn ? 5 : 4);
            a.m(this.ih.length);
            let b = 0,
                c = this.ih;
            for (; b < c.length;) a.P(c[b++])
        }
        wa(a) {
            this.rn =
                0 != a.F();
            let b = a.F();
            this.ih = [];
            let c = 0;
            for (; c < b;) ++c, this.ih.push(a.N())
        }
    }
    class pb extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.R) {
                var b = a.M;
                if (null != b) {
                    if (this.kn) {
                        a = a.oa(this.Ge);
                        if (null == a) return;
                        a = a.J
                    } else a = b.ua.H[this.Ge];
                    null != a && (null != this.Ka[0] && (a.a.x = this.Ka[0]), null != this.Ka[1] && (a.a.y = this.Ka[1]), null != this.Ka[2] && (a.G.x = this.Ka[2]), null != this.Ka[3] && (a.G.y = this.Ka[3]), null != this.Ka[4] && (a.pa.x = this.Ka[4]), null != this.Ka[5] && (a.pa.y = this.Ka[5]), null != this.Ka[6] && (a.V = this.Ka[6]),
                        null != this.Ka[7] && (a.o = this.Ka[7]), null != this.Ka[8] && (a.ba = this.Ka[8]), null != this.Ka[9] && (a.Da = this.Ka[9]), null != this.Zc[0] && (a.S = this.Zc[0]), null != this.Zc[1] && (a.h = this.Zc[1]), null != this.Zc[2] && (a.w = this.Zc[2]))
                }
            }
        }
        va(a) {
            a.P(this.Ge);
            a.m(this.kn ? 1 : 0);
            let b = a.a;
            a.Wb(0);
            let c = 0;
            for (var d = 1, e = 0, f = this.Ka; e < f.length;) {
                var g = f[e];
                ++e;
                null != g && (c |= d, a.gj(g));
                d <<= 1
            }
            e = 0;
            for (f = this.Zc; e < f.length;) g = f[e], ++e, null != g && (c |= d, a.P(g)), d <<= 1;
            d = a.a;
            a.a = b;
            a.Wb(c);
            a.a = d
        }
        wa(a) {
            this.Ge = a.N();
            this.kn = 0 != a.F();
            let b = a.Rb();
            this.Ka = [];
            for (var c = 0; 10 > c;) {
                var d = c++;
                this.Ka[d] = null;
                0 != (b & 1) && (this.Ka[d] = a.vi());
                b >>>= 1
            }
            this.Zc = [];
            for (c = 0; 3 > c;) d = c++, this.Zc[d] = null, 0 != (b & 1) && (this.Zc[d] = a.N()), b >>>= 1
        }
    }
    class Ka extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.Ob(this.R) && a.Pr(a.oa(this.R), this.min, this.rate, this.lj)
        }
        va(a) {
            a.P(this.min);
            a.P(this.rate);
            a.P(this.lj)
        }
        wa(a) {
            this.min = a.N();
            this.rate = a.N();
            this.lj = a.N()
        }
        static na(a, b, c) {
            let d = new Ka;
            d.min = a;
            d.rate = b;
            d.lj = c;
            return d
        }
    }
    class Ua extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.Ob(this.R) &&
                a.bs(a.oa(this.R))
        }
        va() {}
        wa() {}
    }
    class Va extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Ob(this.R)) {
                var b = a.oa(this.R);
                if (null != a.M) {
                    a.M = null;
                    let c = 0,
                        d = a.K;
                    for (; c < d.length;) {
                        let e = d[c];
                        ++c;
                        e.J = null;
                        e.Mb = 0
                    }
                    null != a.Hf && a.Hf(b)
                }
            }
        }
        va() {}
        wa() {}
    }
    class Ia extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.R) {
                a = a.K;
                for (var b = 0, c = a.length; b < c;) {
                    let d = b++;
                    if (d >= this.Ee.length) break;
                    a[d].Ab = this.Ee[d]
                }
            }
        }
        va(a) {
            a.mb(this.Ee.length);
            let b = 0,
                c = this.Ee;
            for (; b < c.length;) a.mb(c[b++])
        }
        wa(a) {
            this.Ee = [];
            let b = a.Cb(),
                c = 0;
            for (; c < b;) ++c, this.Ee.push(a.Cb())
        }
        static na(a) {
            let b = new Ia,
                c = a.U.K,
                d = [],
                e = 0;
            for (; e < c.length;) {
                let f = a.Te.get(c[e++].X);
                d.push(null == f ? 0 : f.Ab)
            }
            b.Ee = d;
            return b
        }
    }
    class v extends Error {
        constructor(a, b, c) {
            super(a);
            this.message = a;
            this.Kj = null != c ? c : this
        }
        Gb() {
            return this.Kj
        }
        static Lb(a) {
            return a instanceof v ? a : a instanceof Error ? new v(a.message, null, a) : new Mb(a, null, a)
        }
        static C(a) {
            return a instanceof v ? a.Kj : a instanceof Error ? a : new Mb(a)
        }
    }
    class Mb extends v {
        constructor(a, b, c) {
            super(String(a), b, c);
            this.value =
                a
        }
        Gb() {
            return this.value
        }
    }
    var Ab = Ab || {},
        X;
    mc.b = !0;
    Object.assign(mc.prototype, {
        g: mc
    });
    O.b = !0;
    Math.b = !0;
    Dc.b = !0;
    Q.b = !0;
    Z.b = !0;
    ha.b = !0;
    jc.b = !0;
    Object.assign(jc.prototype, {
        g: jc
    });
    var na = Ab["bas.basnet.FailReason"] = {
        Tf: !0,
        Zd: null,
        Je: {
            wc: "PeerFailed",
            ob: 0,
            Hb: "bas.basnet.FailReason",
            toString: ja
        },
        Ke: (X = function(a) {
            return {
                ob: 1,
                code: a,
                Hb: "bas.basnet.FailReason",
                toString: ja
            }
        }, X.wc = "Rejected", X.Le = ["code"], X),
        Ie: {
            wc: "Cancelled",
            ob: 2,
            Hb: "bas.basnet.FailReason",
            toString: ja
        },
        Error: {
            wc: "Error",
            ob: 3,
            Hb: "bas.basnet.FailReason",
            toString: ja
        }
    };
    na.Zd = [na.Je, na.Ke, na.Ie, na.Error];
    dc.b = !0;
    Object.assign(dc.prototype, {
        g: dc
    });
    db.b = !0;
    Object.assign(db.prototype, {
        g: db
    });
    var fb = Ab["bas.basnet.ConnectionRequestResponse"] = {
        Tf: !0,
        Zd: null,
        Fj: {
            wc: "Accept",
            ob: 0,
            Hb: "bas.basnet.ConnectionRequestResponse",
            toString: ja
        },
        Rf: (X = function(a) {
            return {
                ob: 1,
                reason: a,
                Hb: "bas.basnet.ConnectionRequestResponse",
                toString: ja
            }
        }, X.wc = "Reject", X.Le = ["reason"], X)
    };
    fb.Zd = [fb.Fj, fb.Rf];
    Lb.b = !0;
    Object.assign(Lb.prototype, {
        g: Lb
    });
    Gc.b = !0;
    Yb.b = !0;
    Object.assign(Yb.prototype, {
        g: Yb
    });
    J.b = !0;
    Object.assign(J.prototype, {
        g: J
    });
    A.b = !0;
    Object.assign(A.prototype, {
        g: A
    });
    U.b = !0;
    Object.assign(U.prototype, {
        g: U
    });
    Kb.b = !0;
    ib.b = !0;
    Ob.b = !0;
    Pb.b = !0;
    Object.assign(Pb.prototype, {
        g: Pb
    });
    x.b = !0;
    Xb.b = !0;
    Ic.b = !0;
    p.b = !0;
    Object.assign(p.prototype, {
        g: p
    });
    eb.b = !0;
    Object.assign(eb.prototype, {
        g: eb
    });
    W.b = !0;
    Object.assign(W.prototype, {
        g: W
    });
    Sa.b = !0;
    Sa.ha = p;
    Object.assign(Sa.prototype, {
        g: Sa
    });
    ac.b = !0;
    ac.Ij = !0;
    Object.assign(ac.prototype, {
        g: ac
    });
    ec.b = !0;
    Object.assign(ec.prototype, {
        g: ec
    });
    qc.b = !0;
    Object.assign(qc.prototype, {
        g: qc
    });
    gc.b = !0;
    Object.assign(gc.prototype, {
        g: gc
    });
    Qa.b = !0;
    Qa.Ij = !0;
    wa.b = !0;
    oa.b = !0;
    oa.ha = W;
    Object.assign(oa.prototype, {
        g: oa
    });
    var ia = Ab["bas.marf.net.ConnFailReason"] = {
        Tf: !0,
        Zd: null,
        Ie: {
            wc: "Cancelled",
            ob: 0,
            Hb: "bas.marf.net.ConnFailReason",
            toString: ja
        },
        Je: {
            wc: "PeerFailed",
            ob: 1,
            Hb: "bas.marf.net.ConnFailReason",
            toString: ja
        },
        Ke: (X = function(a) {
            return {
                ob: 2,
                reason: a,
                Hb: "bas.marf.net.ConnFailReason",
                toString: ja
            }
        }, X.wc = "Rejected", X.Le = ["reason"], X),
        Qf: (X = function(a) {
            return {
                ob: 3,
                description: a,
                Hb: "bas.marf.net.ConnFailReason",
                toString: ja
            }
        }, X.wc = "Other", X.Le = ["description"], X)
    };
    ia.Zd = [ia.Ie, ia.Je, ia.Ke, ia.Qf];
    Na.b = !0;
    Na.ha = oa;
    Object.assign(Na.prototype, {
        g: Na
    });
    Rb.b = !0;
    Rb.ha = oa;
    Object.assign(Rb.prototype, {
        g: Rb
    });
    oc.b = !0;
    Object.assign(oc.prototype, {
        g: oc
    });
    uc.b = !0;
    Tb.b = !0;
    Object.assign(Tb.prototype, {
        g: Tb
    });
    Sb.b = !0;
    Sb.ha = oa;
    Object.assign(Sb.prototype, {
        g: Sb
    });
    cc.b = !0;
    Object.assign(cc.prototype, {
        g: cc
    });
    Ac.b = !0;
    Object.assign(Ac.prototype, {
        g: Ac
    });
    P.b = !0;
    Object.assign(P.prototype, {
        g: P
    });
    Y.b = !0;
    H.b = !0;
    D.b = !0;
    Aa.b = !0;
    tc.b = !0;
    Nb.b = !0;
    Eb.b = !0;
    Object.assign(Eb.prototype, {
        g: Eb
    });
    Bc.b = !0;
    bc.b = !0;
    Object.assign(bc.prototype, {
        g: bc
    });
    Pa.b = !0;
    Ma.b = !0;
    Object.assign(Ma.prototype, {
        g: Ma
    });
    Zb.b = !0;
    Object.assign(Zb.prototype, {
        g: Zb
    });
    lc.b = !0;
    Object.assign(lc.prototype, {
        g: lc
    });
    ma.b = !0;
    Object.assign(ma.prototype, {
        g: ma
    });
    yc.b = !0;
    Object.assign(yc.prototype, {
        g: yc
    });
    zc.b = !0;
    za.b = !0;
    Object.assign(za.prototype, {
        g: za
    });
    ya.b = !0;
    Object.assign(ya.prototype, {
        g: ya
    });
    m.b = !0;
    vc.b = !0;
    Object.assign(vc.prototype, {
        g: vc
    });
    B.b = !0;
    C.b = !0;
    ic.b = !0;
    Object.assign(ic.prototype, {
        g: ic
    });
    Qb.b = !0;
    Object.assign(Qb.prototype, {
        g: Qb
    });
    $b.b = !0;
    lb.b = !0;
    wc.b = !0;
    Object.assign(wc.prototype, {
        g: wc
    });
    xc.b = !0;
    Object.assign(xc.prototype, {
        g: xc
    });
    ra.b = !0;
    Object.assign(ra.prototype, {
        g: ra
    });
    ca.b = !0;
    ca.qd = [Qa];
    Object.assign(ca.prototype, {
        g: ca
    });
    Cb.b = !0;
    Object.assign(Cb.prototype, {
        g: Cb
    });
    Vb.b = !0;
    Object.assign(Vb.prototype, {
        g: Vb
    });
    Ra.b = !0;
    Object.assign(Ra.prototype, {
        g: Ra
    });
    q.b = !0;
    Object.assign(q.prototype, {
        g: q
    });
    va.b = !0;
    Object.assign(va.prototype, {
        g: va
    });
    u.b = !0;
    Object.assign(u.prototype, {
        g: u
    });
    ta.b = !0;
    ta.qd = [Qa, ac];
    Object.assign(ta.prototype, {
        g: ta
    });
    ua.b = !0;
    ua.qd = [Qa];
    Object.assign(ua.prototype, {
        g: ua
    });
    Ha.b = !0;
    Ha.ha = p;
    Object.assign(Ha.prototype, {
        g: Ha
    });
    mb.b = !0;
    mb.ha = p;
    Object.assign(mb.prototype, {
        g: mb
    });
    Xa.b = !0;
    Xa.ha = p;
    Object.assign(Xa.prototype, {
        g: Xa
    });
    qa.b = !0;
    qa.ha = p;
    Object.assign(qa.prototype, {
        g: qa
    });
    Ga.b = !0;
    Ga.ha = p;
    Object.assign(Ga.prototype, {
        g: Ga
    });
    Ja.b = !0;
    Ja.ha = p;
    Object.assign(Ja.prototype, {
        g: Ja
    });
    fa.b = !0;
    fa.ha = p;
    Object.assign(fa.prototype, {
        g: fa
    });
    Ea.b = !0;
    Ea.ha = p;
    Object.assign(Ea.prototype, {
        g: Ea
    });
    Ya.b = !0;
    Ya.ha = p;
    Object.assign(Ya.prototype, {
        g: Ya
    });
    Fa.b = !0;
    Fa.ha = p;
    Object.assign(Fa.prototype, {
        g: Fa
    });
    Da.b = !0;
    Da.ha = p;
    Object.assign(Da.prototype, {
        g: Da
    });
    ob.b = !0;
    ob.ha = p;
    Object.assign(ob.prototype, {
        g: ob
    });
    Wa.b = !0;
    Wa.ha = p;
    Object.assign(Wa.prototype, {
        g: Wa
    });
    Ta.b = !0;
    Ta.ha = p;
    Object.assign(Ta.prototype, {
        g: Ta
    });
    Ca.b = !0;
    Ca.ha = p;
    Object.assign(Ca.prototype, {
        g: Ca
    });
    Ba.b = !0;
    Ba.ha = p;
    Object.assign(Ba.prototype, {
        g: Ba
    });
    Hc.b = !0;
    ka.b = !0;
    ka.ha = p;
    Object.assign(ka.prototype, {
        g: ka
    });
    nb.b = !0;
    nb.ha = p;
    Object.assign(nb.prototype, {
        g: nb
    });
    pb.b = !0;
    pb.ha = p;
    Object.assign(pb.prototype, {
        g: pb
    });
    Ka.b = !0;
    Ka.ha = p;
    Object.assign(Ka.prototype, {
        g: Ka
    });
    Ua.b = !0;
    Ua.ha = p;
    Object.assign(Ua.prototype, {
        g: Ua
    });
    Va.b = !0;
    Va.ha = p;
    Object.assign(Va.prototype, {
        g: Va
    });
    Ia.b = !0;
    Ia.ha = p;
    Object.assign(Ia.prototype, {
        g: Ia
    });
    sa.b = !0;
    sa.qd = [Qa];
    Object.assign(sa.prototype, {
        g: sa
    });
    Db.b = !0;
    Db.qd = [Qa];
    Object.assign(Db.prototype, {
        g: Db
    });
    ab.b = !0;
    ab.qd = [Qa];
    Object.assign(ab.prototype, {
        g: ab
    });
    R.b = !0;
    Object.assign(R.prototype, {
        g: R
    });
    I.b = !0;
    Object.assign(I.prototype, {
        g: I
    });
    G.b = !0;
    Object.assign(G.prototype, {
        g: G
    });
    T.b = !0;
    Object.assign(T.prototype, {
        g: T
    });
    ea.b = !0;
    Object.assign(ea.prototype, {
        g: ea
    });
    nc.b = !0;
    Object.assign(nc.prototype, {
        g: nc
    });
    zb.b = !0;
    Object.assign(zb.prototype, {
        g: zb
    });
    ub.b = !0;
    Object.assign(ub.prototype, {
        g: ub
    });
    bb.b = !0;
    Object.assign(bb.prototype, {
        g: bb
    });
    Wb.b = !0;
    Object.assign(Wb.prototype, {
        g: Wb
    });
    tb.b = !0;
    Object.assign(tb.prototype, {
        g: tb
    });
    wb.b = !0;
    Object.assign(wb.prototype, {
        g: wb
    });
    rb.b = !0;
    Object.assign(rb.prototype, {
        g: rb
    });
    Za.b = !0;
    Object.assign(Za.prototype, {
        g: Za
    });
    qb.b = !0;
    Object.assign(qb.prototype, {
        g: qb
    });
    hc.b = !0;
    Object.assign(hc.prototype, {
        g: hc
    });
    pc.b = !0;
    Object.assign(pc.prototype, {
        g: pc
    });
    xa.b = !0;
    Object.assign(xa.prototype, {
        g: xa
    });
    Ib.b = !0;
    Object.assign(Ib.prototype, {
        g: Ib
    });
    Fb.b = !0;
    Object.assign(Fb.prototype, {
        g: Fb
    });
    kb.b = !0;
    Object.assign(kb.prototype, {
        g: kb
    });
    kc.b = !0;
    Object.assign(kc.prototype, {
        g: kc
    });
    sb.b = !0;
    Object.assign(sb.prototype, {
        g: sb
    });
    jb.b = !0;
    Object.assign(jb.prototype, {
        g: jb
    });
    Oa.b = !0;
    Object.assign(Oa.prototype, {
        g: Oa
    });
    aa.b = !0;
    Object.assign(aa.prototype, {
        g: aa
    });
    La.b = !0;
    Object.assign(La.prototype, {
        g: La
    });
    Jb.b = !0;
    Object.assign(Jb.prototype, {
        g: Jb
    });
    Bb.b = !0;
    Object.assign(Bb.prototype, {
        g: Bb
    });
    $a.b = !0;
    Object.assign($a.prototype, {
        g: $a
    });
    gb.b = !0;
    Object.assign(gb.prototype, {
        g: gb
    });
    vb.b = !0;
    Object.assign(vb.prototype, {
        g: vb
    });
    xb.b = !0;
    Object.assign(xb.prototype, {
        g: xb
    });
    la.b = !0;
    Object.assign(la.prototype, {
        g: la
    });
    ba.b = !0;
    Object.assign(ba.prototype, {
        g: ba
    });
    yb.b = !0;
    Object.assign(yb.prototype, {
        g: yb
    });
    hb.b = !0;
    Object.assign(hb.prototype, {
        g: hb
    });
    v.b = !0;
    v.ha = Error;
    Object.assign(v.prototype, {
        g: v
    });
    Mb.b = !0;
    Mb.ha = v;
    Object.assign(Mb.prototype, {
        g: Mb
    });
    Fc.b = !0;
    Object.assign(Fc.prototype, {
        g: Fc
    });
    w.b = !0;
    pa.Ej |= 0;
    "undefined" != typeof performance && "function" == typeof performance.now && (O.now = performance.now.bind(performance));
    null == String.fromCodePoint && (String.fromCodePoint = function(a) {
        return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
    });
    Object.defineProperty(String.prototype, "__class__", {
        value: String,
        enumerable: !1,
        writable: !0
    });
    String.b = !0;
    Array.b = !0;
    Date.prototype.g = Date;
    Date.b = "Date";
    var Ub = {},
        Lc = {},
        E = Number,
        Cc = Boolean,
        Mc = {},
        Nc = {};
    u.Ma = new u(0, 16777215, 0, -1, "Spectators", "t-spec", 0, 0);
    u.ga = new u(1, 15035990, -1, 8, "Red", "t-red", 15035990, 2);
    u.Ca = new u(2, 5671397, 1, 16, "Blue", "t-blue", 625603, 4);
    u.Ma.Bg = u.Ma;
    u.ga.Bg = u.Ca;
    u.Ca.Bg = u.ga;
    w.Kn = {}.toString;
    db.to = {
        mandatory: {
            OfferToReceiveAudio: !1,
            OfferToReceiveVideo: !1
        }
    };
    U.sh = {
        name: "ECDSA",
        namedCurve: "P-256"
    };
    U.Fm = {
        name: "ECDSA",
        hash: {
            name: "SHA-256"
        }
    };
    ib.op = ["click-rail", "drag-thumb", "wheel",
        "touch"
    ];
    p.zb = !1;
    p.hn = new Map;
    p.Jf = 0;
    W.zb = !1;
    Sa.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    wa.Cc = 0;
    uc.channels = [{
        name: "ro",
        reliable: !0,
        ordered: !0
    }, {
        name: "ru",
        reliable: !0,
        ordered: !1
    }, {
        name: "uu",
        reliable: !1,
        ordered: !1
    }];
    Y.Gj = "application/x-www-form-urlencoded";
    Pa.bb = ["Afghanistan", "AF", 33.3, 65.1, "Albania", "AL", 41.1, 20.1, "Algeria", "DZ", 28, 1.6, "American Samoa", "AS", -14.2, -170.1, "Andorra", "AD", 42.5, 1.6, "Angola", "AO", -11.2, 17.8, "Anguilla", "AI", 18.2, -63, "Antigua and Barbuda", "AG", 17, -61.7, "Argentina", "AR", -34.5, -58.4, "Armenia",
        "AM", 40, 45, "Aruba", "AW", 12.5, -69.9, "Australia", "AU", -25.2, 133.7, "Austria", "AT", 47.5, 14.5, "Azerbaijan", "AZ", 40.1, 47.5, "Bahamas", "BS", 25, -77.3, "Bahrain", "BH", 25.9, 50.6, "Bangladesh", "BD", 23.6, 90.3, "Barbados", "BB", 13.1, -59.5, "Belarus", "BY", 53.7, 27.9, "Belgium", "BE", 50.5, 4.4, "Belize", "BZ", 17.1, -88.4, "Benin", "BJ", 9.3, 2.3, "Bermuda", "BM", 32.3, -64.7, "Bhutan", "BT", 27.5, 90.4, "Bolivia", "BO", -16.2, -63.5, "Bosnia and Herzegovina", "BA", 43.9, 17.6, "Botswana", "BW", -22.3, 24.6, "Bouvet Island", "BV", -54.4, 3.4, "Brazil", "BR",
        -14.2, -51.9, "British Indian Ocean Territory", "IO", -6.3, 71.8, "British Virgin Islands", "VG", 18.4, -64.6, "Brunei", "BN", 4.5, 114.7, "Bulgaria", "BG", 42.7, 25.4, "Burkina Faso", "BF", 12.2, -1.5, "Burundi", "BI", -3.3, 29.9, "Cambodia", "KH", 12.5, 104.9, "Cameroon", "CM", 7.3, 12.3, "Canada", "CA", 56.1, -106.3, "Cape Verde", "CV", 16, -24, "Cayman Islands", "KY", 19.5, -80.5, "Central African Republic", "CF", 6.6, 20.9, "Chad", "TD", 15.4, 18.7, "Chile", "CL", -35.6, -71.5, "China", "CN", 35.8, 104.1, "Christmas Island", "CX", -10.4, 105.6, "Colombia",
        "CO", 4.5, -74.2, "Comoros", "KM", -11.8, 43.8, "Congo [DRC]", "CD", -4, 21.7, "Congo [Republic]", "CG", -.2, 15.8, "Cook Islands", "CK", -21.2, -159.7, "Costa Rica", "CR", 9.7, -83.7, "Croatia", "HR", 45.1, 15.2, "Cuba", "CU", 21.5, -77.7, "Cyprus", "CY", 35.1, 33.4, "Czech Republic", "CZ", 49.8, 15.4, "C\u00f4te d'Ivoire", "CI", 7.5, -5.5, "Denmark", "DK", 56.2, 9.5, "Djibouti", "DJ", 11.8, 42.5, "Dominica", "DM", 15.4, -61.3, "Dominican Republic", "DO", 18.7, -70.1, "Ecuador", "EC", -1.8, -78.1, "Egypt", "EG", 26.8, 30.8, "El Salvador", "SV", 13.7, -88.8, "England",
        "ENG", 55.3, -3.4, "Equatorial Guinea", "GQ", 1.6, 10.2, "Eritrea", "ER", 15.1, 39.7, "Estonia", "EE", 58.5, 25, "Ethiopia", "ET", 9.1, 40.4, "Faroe Islands", "FO", 61.8, -6.9, "Fiji", "FJ", -16.5, 179.4, "Finland", "FI", 61.9, 25.7, "France", "FR", 46.2, 2.2, "French Guiana", "GF", 3.9, -53.1, "French Polynesia", "PF", -17.6, -149.4, "Gabon", "GA", -.8, 11.6, "Gambia", "GM", 13.4, -15.3, "Georgia", "GE", 42.3, 43.3, "Germany", "DE", 51.1, 10.4, "Ghana", "GH", 7.9, -1, "Gibraltar", "GI", 36.1, -5.3, "Greece", "GR", 39, 21.8, "Greenland", "GL", 71.7, -42.6, "Grenada", "GD",
        12.2, -61.6, "Guadeloupe", "GP", 16.9, -62, "Guam", "GU", 13.4, 144.7, "Guatemala", "GT", 15.7, -90.2, "Guinea", "GN", 9.9, -9.6, "Guinea-Bissau", "GW", 11.8, -15.1, "Guyana", "GY", 4.8, -58.9, "Haiti", "HT", 18.9, -72.2, "Honduras", "HN", 15.1, -86.2, "Hong Kong", "HK", 22.3, 114.1, "Hungary", "HU", 47.1, 19.5, "Iceland", "IS", 64.9, -19, "India", "IN", 20.5, 78.9, "Indonesia", "ID", -.7, 113.9, "Iran", "IR", 32.4, 53.6, "Iraq", "IQ", 33.2, 43.6, "Ireland", "IE", 53.4, -8.2, "Israel", "IL", 31, 34.8, "Italy", "IT", 41.8, 12.5, "Jamaica", "JM", 18.1, -77.2, "Japan", "JP", 36.2,
        138.2, "Jordan", "JO", 30.5, 36.2, "Kazakhstan", "KZ", 48, 66.9, "Kenya", "KE", -0, 37.9, "Kiribati", "KI", -3.3, -168.7, "Kosovo", "XK", 42.6, 20.9, "Kuwait", "KW", 29.3, 47.4, "Kyrgyzstan", "KG", 41.2, 74.7, "Laos", "LA", 19.8, 102.4, "Latvia", "LV", 56.8, 24.6, "Lebanon", "LB", 33.8, 35.8, "Lesotho", "LS", -29.6, 28.2, "Liberia", "LR", 6.4, -9.4, "Libya", "LY", 26.3, 17.2, "Liechtenstein", "LI", 47.1, 9.5, "Lithuania", "LT", 55.1, 23.8, "Luxembourg", "LU", 49.8, 6.1, "Macau", "MO", 22.1, 113.5, "Macedonia [FYROM]", "MK", 41.6, 21.7, "Madagascar", "MG", -18.7, 46.8, "Malawi",
        "MW", -13.2, 34.3, "Malaysia", "MY", 4.2, 101.9, "Maldives", "MV", 3.2, 73.2, "Mali", "ML", 17.5, -3.9, "Malta", "MT", 35.9, 14.3, "Marshall Islands", "MH", 7.1, 171.1, "Martinique", "MQ", 14.6, -61, "Mauritania", "MR", 21, -10.9, "Mauritius", "MU", -20.3, 57.5, "Mayotte", "YT", -12.8, 45.1, "Mexico", "MX", 23.6, -102.5, "Micronesia", "FM", 7.4, 150.5, "Moldova", "MD", 47.4, 28.3, "Monaco", "MC", 43.7, 7.4, "Mongolia", "MN", 46.8, 103.8, "Montenegro", "ME", 42.7, 19.3, "Montserrat", "MS", 16.7, -62.1, "Morocco", "MA", 31.7, -7, "Mozambique", "MZ", -18.6, 35.5, "Myanmar [Burma]",
        "MM", 21.9, 95.9, "Namibia", "NA", -22.9, 18.4, "Nauru", "NR", -.5, 166.9, "Nepal", "NP", 28.3, 84.1, "Netherlands", "NL", 52.1, 5.2, "Netherlands Antilles", "AN", 12.2, -69, "New Caledonia", "NC", -20.9, 165.6, "New Zealand", "NZ", -40.9, 174.8, "Nicaragua", "NI", 12.8, -85.2, "Niger", "NE", 17.6, 8, "Nigeria", "NG", 9, 8.6, "Niue", "NU", -19, -169.8, "Norfolk Island", "NF", -29, 167.9, "North Korea", "KP", 40.3, 127.5, "Northern Mariana Islands", "MP", 17.3, 145.3, "Norway", "NO", 60.4, 8.4, "Oman", "OM", 21.5, 55.9, "Pakistan", "PK", 30.3, 69.3, "Palau", "PW", 7.5,
        134.5, "Palestinian Territories", "PS", 31.9, 35.2, "Panama", "PA", 8.5, -80.7, "Papua New Guinea", "PG", -6.3, 143.9, "Paraguay", "PY", -23.4, -58.4, "Peru", "PE", -9.1, -75, "Philippines", "PH", 12.8, 121.7, "Pitcairn Islands", "PN", -24.7, -127.4, "Poland", "PL", 51.9, 19.1, "Portugal", "PT", 39.3, -8.2, "Puerto Rico", "PR", 18.2, -66.5, "Qatar", "QA", 25.3, 51.1, "Romania", "RO", 45.9, 24.9, "Russia", "RU", 61.5, 105.3, "Rwanda", "RW", -1.9, 29.8, "R\u00e9union", "RE", -21.1, 55.5, "Saint Helena", "SH", -24.1, -10, "Saint Kitts", "KN", 17.3, -62.7, "Saint Lucia",
        "LC", 13.9, -60.9, "Saint Pierre", "PM", 46.9, -56.2, "Saint Vincent", "VC", 12.9, -61.2, "Samoa", "WS", -13.7, -172.1, "San Marino", "SM", 43.9, 12.4, "Saudi Arabia", "SA", 23.8, 45, "Scotland", "SCT", 56.5, 4.2, "Senegal", "SN", 14.4, -14.4, "Serbia", "RS", 44, 21, "Seychelles", "SC", -4.6, 55.4, "Sierra Leone", "SL", 8.4, -11.7, "Singapore", "SG", 1.3, 103.8, "Slovakia", "SK", 48.6, 19.6, "Slovenia", "SI", 46.1, 14.9, "Solomon Islands", "SB", -9.6, 160.1, "Somalia", "SO", 5.1, 46.1, "South Africa", "ZA", -30.5, 22.9, "South Georgia", "GS", -54.4, -36.5, "South Korea",
        "KR", 35.9, 127.7, "Spain", "ES", 40.4, -3.7, "Sri Lanka", "LK", 7.8, 80.7, "Sudan", "SD", 12.8, 30.2, "Suriname", "SR", 3.9, -56, "Svalbard and Jan Mayen", "SJ", 77.5, 23.6, "Swaziland", "SZ", -26.5, 31.4, "Sweden", "SE", 60.1, 18.6, "Switzerland", "CH", 46.8, 8.2, "Syria", "SY", 34.8, 38.9, "S\u00e3o Tom\u00e9 and Pr\u00edncipe", "ST", .1, 6.6, "Taiwan", "TW", 23.6, 120.9, "Tajikistan", "TJ", 38.8, 71.2, "Tanzania", "TZ", -6.3, 34.8, "Thailand", "TH", 15.8, 100.9, "Timor-Leste", "TL", -8.8, 125.7, "Togo", "TG", 8.6, .8, "Tokelau", "TK", -8.9, -171.8, "Tonga", "TO",
        -21.1, -175.1, "Trinidad and Tobago", "TT", 10.6, -61.2, "Tunisia", "TN", 33.8, 9.5, "Turkey", "TR", 38.9, 35.2, "Turkmenistan", "TM", 38.9, 59.5, "Turks and Caicos Islands", "TC", 21.6, -71.7, "Tuvalu", "TV", -7.1, 177.6, "U.S. Minor Outlying Islands", "UM", 0, 0, "U.S. Virgin Islands", "VI", 18.3, -64.8, "Uganda", "UG", 1.3, 32.2, "Ukraine", "UA", 48.3, 31.1, "United Arab Emirates", "AE", 23.4, 53.8, "United Kingdom", "GB", 55.3, -3.4, "United States", "US", 37, -95.7, "Uruguay", "UY", -32.5, -55.7, "Uzbekistan", "UZ", 41.3, 64.5, "Vanuatu", "VU", -15.3, 166.9,
        "Vatican City", "VA", 41.9, 12.4, "Venezuela", "VE", 6.4, -66.5, "Vietnam", "VN", 14, 108.2, "Wales", "WLS", 55.3, -3.4, "Wallis and Futuna", "WF", -13.7, -177.1, "Western Sahara", "EH", 24.2, -12.8, "Yemen", "YE", 15.5, 48.5, "Zambia", "ZM", -13.1, 27.8, "Zimbabwe", "ZW", -19, 29.1
    ];
    m.Bs = "wss://p2p.haxball.com/";
    m.Pe = "https://www.haxball.com/rs/";
    m.ig = [{
        urls: "stun:stun.l.google.com:19302"
    }];
    m.j = new yc;
    ca.pl = function() {
        let a = [];
        {
            let b = 0;
            for (; 256 > b;) ++b, a.push(new P(0, 0))
        }
        return a
    }(this);
    ca.vk = function() {
        let a = [];
        {
            let b = 0;
            for (; 256 >
                b;) ++b, a.push(0)
        }
        return a
    }(this);
    q.js = A.ia(1024);
    Ha.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    mb.za = p.Ga({
        Ba: !1,
        delay: !1,
        xj: {
            kj: 10,
            Dj: 900
        }
    });
    Xa.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    qa.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Ga.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Ja.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    fa.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Ea.za = p.Ga({
        Ba: !1,
        delay: !1,
        xj: {
            kj: 10,
            Dj: 2E3
        }
    });
    Ya.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Fa.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Da.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    ob.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Wa.za = p.Ga({});
    Ta.za = p.Ga({
        Ba: !1,
        delay: !1,
        xj: {
            kj: 10,
            Dj: 900
        }
    });
    Ca.za =
        p.Ga({});
    Ba.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    ka.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    nb.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    pb.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Ka.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Ua.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Va.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    Ia.za = p.Ga({
        Ba: !1,
        delay: !1
    });
    I.Dn = .17435839227423353;
    I.Cn = 5.934119456780721;
    ea.An = new cc([0, 0, 2, 1, 0, .35, 1, 0, 1, 0, .7, 1, 0, 0, 0, 1]);
    ea.Bn = new cc([0, -1, 3, 0, 0, .35, 0, 0, 0, 0, .65, 0, 0, 1, 3, 1]);
    ub.O = "<div class='dialog change-location-view'><h1>Change Location</h1><div class='splitter'><div class='list' data-hook='list'></div><div class='buttons'><button data-hook='change'>Change</button><button data-hook='cancel'>Cancel</button></div></div></div>";
    bb.O = "<div class='chatbox-view'><div class='chatbox-view-contents'><div data-hook='drag' class='drag'></div><div data-hook='log' class='log subtle-thin-scrollbar'><div data-hook='log-contents' class='log-contents'><p>Controls:<br/>Move: WASD or Arrows<br/>Kick: X, Space, Ctrl, Shift, Numpad 0<br/>View: Numbers 1 to 4</p></div></div><div class='autocompletebox' data-hook='autocompletebox'></div><div class='input'><input data-hook='input' type='text' /></div></div></div>";
    tb.O = "<div class='choose-nickname-view'><img src=\"images/haxball.png\" /><div class='dialog'><h1>Choose nickname</h1><div class='label-input'><label>Nick:</label><input data-hook='input' type='text' /></div><button data-hook='ok'>Ok</button></div></div>";
    wb.O = "<div class='connecting-view'><div class='dialog'><h1>Connecting</h1><div class='connecting-view-log' data-hook='log'></div><button data-hook='cancel'>Cancel</button></div></div>";
    rb.O = "<div class='create-room-view'><div class='dialog'><h1>Create room</h1><div class='label-input'><label>Room name:</label><input data-hook='name' required /></div><div class='label-input'><label>Password:</label><input data-hook='pass' /></div><div class='label-input'><label>Max players:</label><select data-hook='max-pl'></select></div><button data-hook='unlisted'></button><div class='row'><button data-hook='cancel'>Cancel</button><button data-hook='create'>Create</button></div></div></div>";
    Za.O = "<div class='disconnected-view'><div class='dialog basic-dialog'><h1>Disconnected</h1><p data-hook='reason'></p><div class='buttons'><button data-hook='ok'>Ok</button><button data-hook='replay'>Save replay</button></div></div></div>";
    qb.O = "<div class='game-state-view'><div class='bar-container'><div class='bar'><div class='scoreboard'><div class='teamicon red'></div><div class='score' data-hook='red-score'>0</div><div>-</div><div class='score' data-hook='blue-score'>0</div><div class='teamicon blue'></div></div><div class=\"fps-limit-fix\"></div><div data-hook='timer'></div></div></div><div class='canvas' data-hook='canvas'></div></div>";
    xa.O = "<div class='game-view' tabindex='-1'><div class='gameplay-section' data-hook='gameplay'></div><div class='top-section' data-hook='top-section'></div><div class='bottom-section'><div data-hook='stats'></div><div data-hook='chatbox'></div><div class='bottom-spacer'></div></div><div class='buttons'><div class='sound-button-container' data-hook=\"sound\"><div class='sound-slider' data-hook='sound-slider'><div class='sound-slider-bar-bg' data-hook='sound-bar-bg'><div class='sound-slider-bar' data-hook='sound-bar'></div></div></div><button data-hook='sound-btn'><i class='icon-volume-up' data-hook='sound-icon'></i></button></div><button data-hook='menu'><i class='icon-menu'></i>Menu<span class='tooltip'>Toggle room menu [Escape]</span></button><button data-hook='settings'><i class='icon-cog'></i></button></div><div data-hook='popups'></div></div>";
    Ib.O = "<div class='dialog kick-player-view'><h1 data-hook='title'></h1><div class=label-input><label>Reason: </label><input type='text' data-hook='reason' /></div><button data-hook='ban-btn'><i class='icon-block'></i>Ban from rejoining: <span data-hook='ban-text'></span></button><div class=\"row\"><button data-hook='close'>Cancel</button><button data-hook='kick'>Kick</button></div></div>";
    Fb.O = "<div class='dialog basic-dialog leave-room-view'><h1>Leave room?</h1><p>Are you sure you want to leave the room?</p><div class='buttons'><button data-hook='cancel'>Cancel</button><button data-hook='leave'><i class='icon-logout'></i>Leave</button></div></div>";
    kb.O = "<div class='dialog pick-stadium-view'><h1>Pick a stadium</h1><div class='splitter'><div class='list' data-hook='list'></div><div class='buttons'><button data-hook='pick'>Pick</button><button data-hook='delete'>Delete</button><div class='file-btn'><label for='stadfile'>Load</label><input id='stadfile' type='file' accept='.hbs' data-hook='file'/></div><button data-hook='export'>Export</button><div class='spacer'></div><button data-hook='cancel'>Cancel</button></div></div></div>";
    sb.O = "<div class='dialog' style='min-width:200px'><h1 data-hook='name'></h1><button data-hook='admin'></button><button data-hook='kick'>Kick</button><button data-hook='close'>Close</button></div>";
    jb.O = "<div class='player-list-item'><div data-hook='flag' class='flagico'></div><div data-hook='name'></div><div data-hook='ping'></div></div>";
    Oa.O = "<div class='player-list-view'><div class='buttons'><button data-hook='join-btn'>Join</button><button data-hook='reset-btn' class='admin-only'></button></div><div class='list thin-scrollbar' data-hook='list'></div></div>";
    La.O = "<div class='replay-controls-view'><button data-hook='reset'><i class='icon-to-start'></i></button><button data-hook='play'><i data-hook='playicon'></i></button><div data-hook='spd'>1x</div><button data-hook='spddn'>-</button><button data-hook='spdup'>+</button><div data-hook='time'>00:00</div><div class='timebar' data-hook='timebar'><div class='barbg'><div class='bar' data-hook='progbar'></div></div><div class='timetooltip' data-hook='timetooltip'></div></div><button data-hook='leave'>Leave</button></div>";
    Jb.O = "<div class='dialog basic-dialog room-link-view'><h1>Room link</h1><p>Use this url to link others directly into this room.</p><input data-hook='link' readonly></input><div class='buttons'><button data-hook='close'>Close</button><button data-hook='copy'>Copy to clipboard</button></div></div>";
    Bb.Cj = "<tr><td><span data-hook='tag'></span><span data-hook='name'></span></td><td data-hook='players'></td><td data-hook='pass'></td><td><div data-hook='flag' class='flagico'></div><span data-hook='distance'></span></td></tr>";
    $a.Cj = "<div class='roomlist-view'><div class='notice' data-hook='notice' hidden><div data-hook='notice-contents'>Testing the notice.</div><div data-hook='notice-close'><i class='icon-cancel'></i></div></div><div class='dialog'><h1>Room list</h1><p>Tip: Join rooms near you to reduce lag.</p><div class='splitter'><div class='list'><table class='header'><colgroup><col><col><col><col></colgroup><thead><tr><td>Name</td><td>Players</td><td>Pass</td><td>Distance</td></tr></thead></table><div class='separator'></div><div class='content' data-hook='listscroll'><table><colgroup><col><col><col><col></colgroup><tbody data-hook='list'></tbody></table></div><div class='filters'><span class='bool' data-hook='fil-pass'>Show locked <i></i></span><span class='bool' data-hook='fil-full'>Show full <i></i></span><span class='bool' data-hook='fil-empty'>Show empty <i></i></span></div></div><div class='buttons'><button data-hook='refresh'><i class='icon-cw'></i><div>Refresh</div></button><button data-hook='join'><i class='icon-login'></i><div>Join Room</div></button><button data-hook='create'><i class='icon-plus'></i><div>Create Room</div></button><div class='spacer'></div><div class='file-btn'><label for='replayfile'><i class='icon-play'></i><div>Replays</div></label><input id='replayfile' type='file' accept='.hbr2' data-hook='replayfile'/></div><button data-hook='settings'><i class='icon-cog'></i><div>Settings</div></button><button data-hook='changenick'><i class='icon-cw'></i><div>Change Nick</div></button></div></div><p data-hook='count'></p></div></div>";
    vb.O = "<div class='room-password-view'><div class='dialog'><h1>Password required</h1><div class='label-input'><label>Password:</label><input data-hook='input' /></div><div class='buttons'><button data-hook='cancel'>Cancel</button><button data-hook='ok'>Ok</button></div></div></div>";
    xb.O = "<div class='room-view'><div class='container'><h1 data-hook='room-name'></h1><div class='header-btns'><button data-hook='rec-btn'><i class='icon-circle'></i>Rec</button><button data-hook='link-btn'><i class='icon-link'></i>Link</button><button data-hook='leave-btn'><i class='icon-logout'></i>Leave</button></div><div class='teams'><div class='tools admin-only'><button data-hook='auto-btn'>Auto</button><button data-hook='rand-btn'>Rand</button><button data-hook='lock-btn'>Lock</button><button data-hook='reset-all-btn'>Reset</button></div><div data-hook='red-list'></div><div data-hook='spec-list'></div><div data-hook='blue-list'></div><div class='spacer admin-only'></div></div><div class='settings'><div><label class='lbl'>Time limit</label><select data-hook='time-limit-sel'></select></div><div><label class='lbl'>Score limit</label><select data-hook='score-limit-sel'></select></div><div><label class='lbl'>Stadium</label><label class='val' data-hook='stadium-name'>testing the stadium name</label><button class='admin-only' data-hook='stadium-pick'>Pick</button></div></div><div class='controls admin-only'><button data-hook='start-btn'><i class='icon-play'></i>Start game</button><button data-hook='stop-btn'><i class='icon-stop'></i>Stop game</button><button data-hook='pause-btn'><i class='icon-pause'></i>Pause</button></div></div></div>";
    la.O = '<div class=\'dialog settings-view\'><h1>Settings</h1><button data-hook=\'close\'>Close</button><div class=\'tabs\'><button data-hook=\'soundbtn\'>Sound</button><button data-hook=\'videobtn\'>Video</button><button data-hook=\'inputbtn\'>Input</button><button data-hook=\'miscbtn\'>Misc</button></div><div data-hook=\'presskey\' tabindex=\'-1\'><div>Press a key</div></div><div class=\'tabcontents\'><div class=\'section\' data-hook=\'miscsec\'><div class=\'loc\' data-hook=\'loc\'></div><div class=\'loc\' data-hook=\'loc-ovr\'></div><button data-hook=\'loc-ovr-btn\'></button></div><div class=\'section\' data-hook=\'soundsec\'><div data-hook="tsound-main">Sounds enabled</div><div data-hook="tsound-chat">Chat sound enabled</div><div data-hook="tsound-highlight">Nick highlight sound enabled</div><div data-hook="tsound-crowd">Crowd sound enabled</div></div><div class=\'section\' data-hook=\'inputsec\'></div><div class=\'section\' data-hook=\'videosec\'><div>Viewport Mode:<select data-hook=\'viewmode\'><option>Dynamic</option><option>Restricted 840x410</option><option>Full 1x Zoom</option><option>Full 1.25x Zoom</option><option>Full 1.5x Zoom</option><option>Full 1.75x Zoom</option><option>Full 2x Zoom</option><option>Full 2.25x Zoom</option><option>Full 2.5x Zoom</option></select></div><div>FPS Limit:<select data-hook=\'fps\'><option>None (Recommended)</option><option>30</option></select></div><div>Resolution Scaling:<select data-hook=\'resscale\'><option>100%</option><option>75%</option><option>50%</option><option>25%</option></select></div><div data-hook="tvideo-lowlatency">Use low latency canvas</div><div data-hook="tvideo-teamcol">Custom team colors enabled</div><div data-hook="tvideo-showindicators">Show chat indicators</div><div data-hook="tvideo-showavatars">Show player avatars</div><div class="option-row"><div style="margin-right: 10px; flex: 1; max-width: 115px;">Chat opacity </div><div style="width: 40px" data-hook="chatopacity-value">1</div><input class="slider" type="range" min="0.5" max="1" step="0.01" data-hook="chatopacity-range"></div><div class="option-row"><div style="margin-right: 10px; flex: 1; max-width: 115px;">Chat focus height </div><div style="width: 40px" data-hook="chatfocusheight-value">200</div><input class="slider" type="range" min="0" max="400" step="10" data-hook="chatfocusheight-range"></div><div>Chat background width:<select data-hook=\'chatbgmode\'><option>Full</option><option>Compact</option></select></div></div></div></div>';
    la.sm = 0;
    ba.O = "<div class='simple-dialog-view'><div class='dialog basic-dialog'><h1 data-hook='title'></h1><p data-hook='content'></p><div class='buttons' data-hook='buttons'></div></div></div>";
    yb.O = "<div class=\"stats-view-container\"><div class='stats-view'><p data-hook='ping'></p><p data-hook='fps'></p><div data-hook='graph'></div></div></div>";
    hb.O = '<div class=\'unsupported-browser-view\'><div class=\'dialog\'><h1>Unsupported Browser</h1><p>Sorry! Your browser doesn\'t yet implement some features which are required for HaxBall to work.</p><p>The missing features are: <span data-hook=\'features\'></span></p><h2>Recommended browsers:</h2><div><a href="https://www.mozilla.org/firefox/new/"><img src="images/firefox-icon.png"/>Firefox</a></div><div><a href="https://www.google.com/chrome/"><img src="images/chrome-icon.png"/>Chrome</a></div><div><a href="http://www.opera.com/"><img src="images/opera-icon.png"/>Opera</a></div></div></div>';
    B.Op()
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
