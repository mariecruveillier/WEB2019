import { h } from 'hyperapp'
import { Country } from '../wrapper/index'

export default () =>
  <div>
    describe('Country.all()', () => {
      it('returns object with results array', () =>
        Country.all().then(data => {
          expect(data).to.be.instanceof(Object)
          expect(data.results).to.be.instanceof(Array)
        })
      )
    })
  </div>
