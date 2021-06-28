import React from 'react'
import PropTypes from 'prop-types'
import { getColorByName } from './utils'
import MoreH from './MoreH'
import MoreV from './MoreV'
import Location from './Location'
import ArrowBottom from './ArrowBottom'
import LockOpen from './LockOpen'
import Loop from './Loop'
import Warning from './Warning'
import Build from './Build'
import LockClose from './LockClose'
import Pencil from './Pencil'
import Close from './Close'
import CircleClose from './CircleClose'
import Trash from './Trash'
import Times from './Times'
import Save from './Save'
import Alert from './Alert'
import Alarm from './Alarm'
import Ban from './Ban'
import PowerOff from './PowerOff'
import Search from './Search'
import CloudUpload from './CloudUpload'
import HelpOutline from './HelpOutline'
import Hand from './Hand'
import Transfer from './Transfer'
import Assignment from './Assignment'
import AssignmentLate from './AssignmentLate'
import CheckCircle from './CheckCircle'
import LibraryBooks from './LibraryBooks'
import AssignmentReturned from './AssignmentReturned'
import TransferWithStation from './TransferWithStation'
import Filter from './Filter'
import Alert2 from './Alert2'
import Menu from './Menu'
import Calendar from './Calendar'
import Print from './Print'
import History from './History'
import Ballot from './Ballot'
import Thermostate from './Thermostate'
import Boat from './Boat'
import Unarchive from './Unarchive'
import Label from './Label'
import MapPlace from './MapPlace'
import Plus from './Plus'
import Refresh from './Refresh'
import Dashboard from './Dashboard'
import Products from './Products'
import Shop from './Shop'
import Storage from './Storage'
import Message from './Message'
import Cart from './Cart'
import LogoDemo1 from './LogoDemo1'

/**
 *
 * @param {import('./types').PropsVIcon} param0
 */
function VIcon ({ name, color, size, pointer, disabled = false, ...props }) {
  const _color = getColorByName(color)
  const style = { fontSize: `${size}px`, ...(pointer && { cursor: 'pointer' }), ...(disabled && { pointerEvents: 'none', opacity: '.5', cursor: 'default' }) }

  switch (name) {
    case 'logodemo1':
      return <LogoDemo1 {...props} style={style} color={_color} />
    case 'refresh':
      return <Refresh {...props} style={style} color={_color} />
    case 'plus':
      return <Plus {...props} style={style} color={_color} />
    case 'mapplace':
      return <MapPlace {...props} style={style} color={_color} />
    case 'label':
      return <Label {...props} style={style} color={_color} />
    case 'unarchive':
      return <Unarchive {...props} style={style} color={_color} />
    case 'boat':
      return <Boat {...props} style={style} color={_color} />
    case 'thermostate':
      return <Thermostate {...props} style={style} color={_color} />
    case 'ballot':
      return <Ballot {...props} style={style} color={_color} />
    case 'print':
      return <Print {...props} style={style} color={_color} />
    case 'dashboard':
      return <Dashboard {...props} style={style} color={_color} />
    case 'products':
      return <Products {...props} style={style} color={_color} />
    case 'shop':
      return <Shop {...props} style={style} color={_color} />
    case 'storage':
      return <Storage {...props} style={style} color={_color} />
    case 'cart':
      return <Cart {...props} style={style} color={_color} />
    case 'message':
      return <Message {...props} style={style} color={_color} />
    case 'more-h':
      return <MoreH {...props} style={style} color={_color} />
    case 'more-v':
      return <MoreV {...props} style={style} color={_color} />
    case 'location':
      return <Location {...props} style={style} color={_color} />
    case 'arrow-bottom':
      return <ArrowBottom {...props} style={style} color={_color} />
    case 'lock-open':
      return <LockOpen {...props} style={style} color={_color} />
    case 'loop':
      return <Loop {...props} style={style} color={_color} />
    case 'warning':
      return <Warning {...props} style={style} color={_color} />
    case 'build':
      return <Build {...props} style={style} color={_color} />
    case 'lock-close':
      return <LockClose {...props} style={style} color={_color} />
    case 'pencil':
      return <Pencil {...props} style={style} color={_color} />
    case 'close':
      return <Close {...props} style={style} color={_color} />
    case 'circle-close':
      return <CircleClose {...props} style={style} color={_color} />
    case 'trash':
      return <Trash {...props} style={style} color={_color} />
    case 'times':
      return <Times {...props} style={style} color={_color} />
    case 'save':
      return <Save {...props} style={style} color={_color} />
    case 'alert':
      return <Alert {...props} style={style} color={_color} />
    case 'alarm':
      return <Alarm {...props} style={style} color={_color} />
    case 'ban':
      return <Ban {...props} style={style} color={_color} />
    case 'power-off':
      return <PowerOff {...props} style={style} color={_color} />
    case 'cloud-upload':
      return <CloudUpload {...props} style={style} color={_color} />
    case 'help-outline':
      return <HelpOutline {...props} style={style} color={_color} />
    case 'search':
      return <Search {...props} style={style} color={_color} />
    case 'transfer':
      return <Transfer {...props} style={style} color={_color} />
    case 'hand':
      return <Hand {...props} style={style} color={_color} />
    case 'assignment':
      return <Assignment {...props} style={style} color={_color} />
    case 'assignment-late':
      return <AssignmentLate {...props} style={style} color={_color} />
    case 'check-cirle':
      return <CheckCircle {...props} style={style} color={_color} />
    case 'library-books':
      return <LibraryBooks {...props} style={style} color={_color} />
    case 'assignment-returned':
      return <AssignmentReturned {...props} style={style} color={_color} />
    case 'transfer-with-station':
      return <TransferWithStation {...props} style={style} color={_color} />
    case 'filter':
      return <Filter {...props} style={style} color={_color} />
    case 'alert2':
      return <Alert2 {...props} style={style} color={_color} />
    case 'menu':
      return <Menu {...props} style={style} color={_color} />
    case 'calendar':
      return <Calendar {...props} style={style} color={_color} />
    case 'history':
      return <History {...props} style={style} color={_color} />
    default:
      return null
  }
}

VIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'white', 'danger', 'secondary', 'success', 'white', 'dark', 'gray', 'warning']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  pointer: PropTypes.bool
}

VIcon.defaultProps = {
  color: 'secondary',
  size: 15,
  pointer: false
}

export default VIcon
