(function () {
  window.angular.module('boardApp', [])
    .controller('BoardController', ['$scope', '$http', '$timeout', BoardController]);

  function BoardController($scope, $http, $timeout) {
    $scope.kbletters = 'abcdefgh'.split('');
    $scope.kbnumbers = [1, 2, 3, 4, 5, 6, 7, 8];
    $scope.board = {
      a: [
        { figure: 'tower', class: 'black' },
        { figure: 'knight', class: 'black' },
        { figure: 'bishop', class: 'black' },
        { figure: 'queen', class: 'black' },
        { figure: 'king', class: 'black' },
        { figure: 'bishop', class: 'black' },
        { figure: 'knight', class: 'black' },
        { figure: 'tower', class: 'black' }
      ],
      b: [
        { figure: 'pawn', class: 'black' },
        { figure: 'pawn', class: 'black' },
        { figure: 'pawn', class: 'black' },
        { figure: 'pawn', class: 'black' },
        { figure: 'pawn', class: 'black' },
        { figure: 'pawn', class: 'black' },
        { figure: 'pawn', class: 'black' },
        { figure: 'pawn', class: 'black' }
      ],
      c: [
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' }
      ],
      d: [
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' }
      ],
      e: [
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' }
      ],
      f: [
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' },
        { figure: '' }
      ],
      g: [
        { figure: 'pawn', class: 'white' },
        { figure: 'pawn', class: 'white' },
        { figure: 'pawn', class: 'white' },
        { figure: 'pawn', class: 'white' },
        { figure: 'pawn', class: 'white' },
        { figure: 'pawn', class: 'white' },
        { figure: 'pawn', class: 'white' },
        { figure: 'pawn', class: 'white' }
      ],
      h: [
        { figure: 'tower', class: 'white' },
        { figure: 'knight', class: 'white' },
        { figure: 'bishop', class: 'white' },
        { figure: 'queen', class: 'white' },
        { figure: 'king', class: 'white' },
        { figure: 'bishop', class: 'white' },
        { figure: 'knight', class: 'white' },
        { figure: 'tower', class: 'white' }
      ]
    };
    $scope.moves = [
      { white: 'e4', black: 'e5' },
      { white: 'Cfe', black: 'e5' }
    ];
    console.log($scope.kbletters);
  }
})();