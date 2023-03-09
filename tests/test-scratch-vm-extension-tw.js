(function(Scratch) {
  'use strict';

  class Fetch {
    /** @returns {Scratch.Info} */
    getInfo () {
      return {
        id: 'fetch',
        name: 'Fetch',
        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'GET [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          }
        ]
      };
    }

    /**
     * @param {{URL: string;}} args
     */
    get (args) {
      return Scratch.fetch(Scratch.Cast.toString(args.URL))
        .then(r => r.text())
        .catch(() => '');
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);
