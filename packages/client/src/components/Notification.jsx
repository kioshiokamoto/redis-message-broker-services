import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import VIcon from './VIcon';
export default function Notification({ type, event }) {
	return (
		<Flex color="gray" align="center" py="1" minW="80">
			<VIcon name="avatar" color="blue" size={35} />
			<Text px="4">
				<b style={{ color: 'var(--secondary)' }}>{type}</b> - Se acaba de publicar un evento:{' '}
				<b style={{ color: 'var(--secondary)' }}>{event}</b>
			</Text>
		</Flex>
	);
}
