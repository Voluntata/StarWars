import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  animateChild,
  state
} from '@angular/animations';




// export const fadeAnimation = trigger('fadeAnimation', [
//   transition('* => *', [
//     query(
//       ':enter',
//       [style({ opacity: 0 })],
//       { optional: true }
//     ),
//     query(
//       ':leave',
//        [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
//       { optional: true }
//     ),
//     query(
//       ':enter',
//       [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
//       { optional: true }
//     )
//   ])
// ]);

export const fadeAnimation =
  trigger('fadeAnimation', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ])
    ]),
]);
