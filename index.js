export const config = { runtime: "edge" };

const _0x9f8a2c1d = (function() {
    const _0x4b7e9f2a = ["\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e", "\x72\x65\x70\x6c\x61\x63\x65", "\x2f\x24\x2f", "", "\x4d\x69\x73\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x3a\x20\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x65\x74", "\x35\x30\x30", "\x68\x6f\x73\x74", "\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e", "\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65", "\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61\x74\x65", "\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e", "\x74\x65", "\x74\x72\x61\x69\x6c\x65\x72", "\x74\x72\x61\x6e\x73\x66\x65\x72\x2d\x65\x6e\x63\x6f\x64\x69\x6e\x67", "\x75\x70\x67\x72\x61\x64\x65", "\x66\x6f\x72\x77\x61\x72\x64\x65\x64", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x68\x6f\x73\x74", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x72\x6f\x74\x6f", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x6f\x72\x74", "\x78\x2d\x76\x65\x72\x63\x65\x6c\x2d", "\x78\x2d\x72\x65\x61\x6c\x2d\x69\x70", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72", "\x42\x61\x64\x20\x47\x61\x74\x65\x77\x61\x79\x3a\x20\x54\x75\x6e\x6e\x65\x6c\x20\x46\x61\x69\x6c\x65\x64", "\x35\x30\x32", "\x72\x65\x6c\x61\x79\x20\x65\x72\x72\x6f\x72\x3a"];
    return function(_0x5d8c1f9e) {
        return _0x4b7e9f2a[_0x5d8c1f9e];
    };
})();

const _0x1a3b9f7d = _0x9f8a2c1d(0);
let _0x2f8e4c6b = (process.env[_0x1a3b9f7d] || "")[_0x9f8a2c1d(1)](/\/$/, _0x9f8a2c1d(3));

const _0x7c4d9e2f = new Set([
    _0x9f8a2c1d(6), _0x9f8a2c1d(7), _0x9f8a2c1d(8), _0x9f8a2c1d(9),
    _0x9f8a2c1d(10), _0x9f8a2c1d(11), _0x9f8a2c1d(12), _0x9f8a2c1d(13),
    _0x9f8a2c1d(14), _0x9f8a2c1d(15), _0x9f8a2c1d(16), _0x9f8a2c1d(17),
    _0x9f8a2c1d(18)
]);

function _0x3e9f2a8d() {
    return Math.random() > 0.5 ? 42 : 0;
}

export default async function _0x8f2c7e9a(_0x4d1b6f3e) {
    if (!_0x2f8e4c6b) {
        return new Response(_0x9f8a2c1d(4), { status: 500 });
    }

    try {
        _0x3e9f2a8d(); // junk

        let _0x5a9c2e1f = _0x4d1b6f3e.url.indexOf("/", 8);
        const _0x6b8d4f2a = _0x5a9c2e1f === -1 
            ? _0x2f8e4c6b + "/" 
            : _0x2f8e4c6b + _0x4d1b6f3e.url.slice(_0x5a9c2e1f);

        const _0x9e3f7c1b = new Headers();
        let _0x2c7e9f4d = null;

        for (const [_0x1f8a3c6e, _0x5d9b2f7c] of _0x4d1b6f3e.headers) {
            if (_0x7c4d9e2f.has(_0x1f8a3c6e)) continue;
            if (_0x1f8a3c6e.startsWith(_0x9f8a2c1d(19))) continue;

            if (_0x1f8a3c6e === _0x9f8a2c1d(20)) {
                _0x2c7e9f4d = _0x5d9b2f7c;
                continue;
            }
            if (_0x1f8a3c6e === _0x9f8a2c1d(21)) {
                if (!_0x2c7e9f4d) _0x2c7e9f4d = _0x5d9b2f7c;
                continue;
            }
            _0x9e3f7c1b.set(_0x1f8a3c6e, _0x5d9b2f7c);
        }

        if (_0x2c7e9f4d) _0x9e3f7c1b.set(_0x9f8a2c1d(21), _0x2c7e9f4d);

        const _0x4e7f2c9a = _0x4d1b6f3e.method;
        const _0x8b1d9f3e = _0x4e7f2c9a !== "GET" && _0x4e7f2c9a !== "HEAD";

        const _0x7f3c9e2d = await fetch(_0x6b8d4f2a, {
            method: _0x4e7f2c9a,
            headers: _0x9e3f7c1b,
            body: _0x8b1d9f3e ? _0x4d1b6f3e.body : undefined,
            duplex: "half",
            redirect: "manual"
        });

        return _0x7f3c9e2d;
    } catch (_0x9a2f7c1e) {
        console.error(_0x9f8a2c1d(24) + _0x9a2f7c1e);
        return new Response(_0x9f8a2c1d(22), { status: 502 });
    }
}

// Junk function (dead code)
function _0x6f9e4c2a() {
    let _0x1c8d3f7b = 0;
    for (let i = 0; i < 10; i++) {
        _0x1c8d3f7b += Math.random() * 100 | 0;
    }
    return _0x1c8d3f7b > 500 ? "x" : "y";
}
