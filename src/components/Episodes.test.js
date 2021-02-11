import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

export const tvFixture = [{
    id: '',
    image: {medium:""},
    name: "",
    season: 2,
    number: 2,
    summary: "<p> summary </p>",
    runtime: 60,

},{
    id: '',
    image: {medium:""},
    name: "",
    season: 2,
    number: 2,
    summary: "<p> summary </p>",
    runtime: 60,
}];

test("Episodes.js : render", () => {
    expect(() => render(<Episodes episodes={[]} />).container.toThrow)
});

test("Episodes.js : shows data when rerendered with fixture ", () => {
    expect(() => render(<Episodes episodes={tvFixture} />)).toBeTruthy;

})


// reference for expected data
// <div className="episodes">
//       {props.episodes.map(e => (
//         <div className="episode" key={e.id}>
//           {e.image && (
//             <img className="episode-image" src={e.image.medium} alt={e.name} />
//           )}
//           <div className="episode-info">
//             <p className="episode-number">
//               Season {e.season}, Episode {e.number}
//             </p>
//             <h3>{e.name}</h3>
//             {e.summary && parse(e.summary)}
//             <div className="flex-spacer" />
//             <p className="episode-runtime">{e.runtime} minutes</p>
//           </div>
//         </div>
//       ))}
//     </div>

// \/ /\ ** TEST CURRENTLY NEEDS PROMISE > DATA > _EMBEDDED > EPISODES > [ array of objects {keys needed for .map}]

// PROMISE_EXAMPLE
// airdate: "2016-07-15"
// airstamp: "2016-07-15T12:00:00+00:00"
// airtime: ""
// id: 553946
// image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"}
// name: "Chapter One: The Vanishing of Will Byers"
// number: 1
// runtime: 60
// season: 1
// summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>"
// type: "regular"
// url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers"
// _links: {self: {…}}
// __proto__: Object