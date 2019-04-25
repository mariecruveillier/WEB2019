import {country} from './country'
import {habitat} from './habitat'
import {measure} from './measure'
import {region} from './region'
import {species} from './species'
import {threat} from './threat'
import {compGroup} from './comprehensiveGroups'

const Country = country()
const Habitat = habitat()
const Measure = measure()
const Region = region()
const Species = species()
const Threat = threat()
const CompGroup = compGroup()

export default {
  Country,
  Habitat,
  Measure,
  Region,
  Species,
  Threat,
  CompGroup
}
