module.exports = {
  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    const correspondances = new Map()
    correspondances.set( 'p', 1 )
    correspondances.set( 'n', 5 )
    correspondances.set( 'd', 10 )
    correspondances.set( 'q', 25 )

    if ( !correspondances.has( coinType ) ) {
        throw new Error('Unrecognized coin ' + coinType);
    }

    return correspondances.get( coinType )
  },
};