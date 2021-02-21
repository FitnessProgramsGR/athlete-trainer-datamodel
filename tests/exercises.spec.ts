import { ExerciseEntry, Muscle } from "../src/exercise";
import { ImageMedia, VideoMedia } from "../src/media";

const expectedSerializeOutput = {
    id: 'exerciseId',
    name: 'Pull ups',
    description: 'description of pull ups',
    muscles: [
        { id: 'muscleId1', name: 'Back' },
        { id: 'muscleId2', name: 'Biceps' }
    ],
    media: [
        {
            id: 'mediaId',
            src: 'youtube.com/fmerpouivnev',
            type: 'video'
        },
        {
            id: 'secondMediaId',
            src: 'image.com',
            type: 'image'
        }
    ]

}
describe('Creting Exercises', () => {
    let exercise: ExerciseEntry;
    beforeAll(() => {
        exercise = new ExerciseEntry('exerciseId', 'Pull ups', 'description of pull ups', [
            new Muscle('muscleId1', 'Back'), new Muscle('muscleId2', 'Biceps')
        ], [new VideoMedia('mediaId', 'youtube.com/fmerpouivnev'), new ImageMedia('secondMediaId', 'image.com')])
    })

    it('Serialization test', () => {
        expect(JSON.stringify(exercise.toJSON())).toBe(JSON.stringify(expectedSerializeOutput))
    })
})