import {country} from './country'
import {habitat} from './habitat'
import {measure} from './measure'
import {region} from './region'
import {species} from './species'
import {threat} from './threat'
import {compGroup} from './comprehensiveGroups'
import {className} from './className'

const Country = country()
const Region = region()
const Habitat = habitat()
const Measure = measure()
const Species = species()
const Threat = threat()
const CompGroup = compGroup()
const ClassName = className()

export default {
  Country,
  Region,
  Habitat,
  Measure,
  Species,
  Threat,
  CompGroup,
  ClassName
}
