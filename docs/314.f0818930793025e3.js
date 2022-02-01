'use strict';
(self.webpackChunkprueba_tecnica = self.webpackChunkprueba_tecnica || []).push([
  [314],
  {
    7314: (f, r, o) => {
      o.r(r), o.d(r, { AboutModule: () => U });
      var s = o(9808),
        c = o(1062),
        i = o(2155),
        d = o(3472),
        l = o(5357),
        m = o(7520),
        A = o(9981),
        t = o(5e3),
        e = o(9224),
        g = o(5245);
      const v = [
        {
          path: '',
          component: (() => {
            class n {
              constructor() {
                this.version = A.N.version;
              }
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (a) {
                return new (a || n)();
              }),
              (n.ɵcmp = t.Xpm({
                type: n,
                selectors: [['app-about']],
                decls: 21,
                vars: 1,
                consts: [
                  [1, 'container'],
                  ['translate', ''],
                ],
                template: function (a, Z) {
                  1 & a &&
                    (t.TgZ(0, 'div', 0),
                    t._uU(1, '\n  '),
                    t.TgZ(2, 'mat-card'),
                    t._uU(3, '\n    '),
                    t.TgZ(4, 'h1'),
                    t._uU(5, '\n      '),
                    t.TgZ(6, 'mat-card-title', 1),
                    t._uU(7, 'APP_NAME'),
                    t.qZA(),
                    t._uU(8, '\n    '),
                    t.qZA(),
                    t._uU(9, '\n    '),
                    t.TgZ(10, 'mat-card-content'),
                    t._uU(11, '\n      '),
                    t.TgZ(12, 'mat-icon'),
                    t._uU(13, 'code'),
                    t.qZA(),
                    t._uU(14, '\n      '),
                    t.TgZ(15, 'span', 1),
                    t._uU(16, 'Version'),
                    t.qZA(),
                    t._uU(17),
                    t.qZA(),
                    t._uU(18, '\n  '),
                    t.qZA(),
                    t._uU(19, '\n'),
                    t.qZA(),
                    t._uU(20, '\n')),
                    2 & a && (t.xp6(17), t.hij(' ', Z.version, '\n    '));
                },
                directives: [e.a8, e.n5, c.Pi, e.dn, g.Hw],
                styles: [
                  '.container[_ngcontent-%COMP%]{text-align:center;padding:1rem}.mat-icon[_ngcontent-%COMP%]{vertical-align:middle}',
                ],
              })),
              n
            );
          })(),
          data: { title: (0, m.J)('About') },
        },
      ];
      let p = (() => {
          class n {}
          return (
            (n.ɵfac = function (a) {
              return new (a || n)();
            }),
            (n.ɵmod = t.oAB({ type: n })),
            (n.ɵinj = t.cJS({ providers: [], imports: [[l.Bz.forChild(v)], l.Bz] })),
            n
          );
        })(),
        U = (() => {
          class n {}
          return (
            (n.ɵfac = function (a) {
              return new (a || n)();
            }),
            (n.ɵmod = t.oAB({ type: n })),
            (n.ɵinj = t.cJS({ imports: [[s.ez, c.aw, i.o9, d.q, p]] })),
            n
          );
        })();
    },
  },
]);
