import FeedPost from '@/feed/components/FeedPost';
import BoundingBox from '@/feed/new/components/BoundingBox';
import EventInput from '@/feed/new/components/EventInput';
import useLinkedEvents from '@/feed/new/hooks/useLinkedEvents';
import AppLayout from '@/global/layouts/AppLayout';
import {
	TopicType,
	useCreateNoticeMutation,
	useLoggedInUserQuery,
} from '@/graphql/generated';
import withApollo from '@/lib/withApollo';
import EventItem from '@/shared/components/EventItem';
import TopicsModal from '@/shared/components/TopicsModal';
import useDisclosure from '@/shared/hooks/useDisclosure';
import Button from '@/shared/ui/Button';
import Spinner from '@/shared/ui/Spinner';
import Tag from '@/shared/ui/Tag';
import TextArea from '@/shared/ui/TextArea';
import React from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const DUMMY_DATA: any = [
	{
		_id: '614c8f08fe60d017770f5ebd',
		name: 'Quire',
	},
	{
		_id: '614c8f08fe60d017770f5ebe',
		name: 'Brainbox',
	},
	{
		_id: '614c8f08fe60d017770f5ebf',
		name: 'Yata',
	},
	{
		_id: '614c8f08fe60d017770f5ec0',
		name: 'Izio',
	},
	{
		_id: '614c8f08fe60d017770f5ec1',
		name: 'Browsedrive',
	},
	{
		_id: '614c8f08fe60d017770f5ec2',
		name: 'Skyba',
	},
	{
		_id: '614c8f08fe60d017770f5ec3',
		name: 'Roodel',
	},
	{
		_id: '614c8f08fe60d017770f5ec4',
		name: 'Feedmix',
	},
	{
		_id: '614c8f08fe60d017770f5ec5',
		name: 'Midel',
	},
	{
		_id: '614c8f08fe60d017770f5ec6',
		name: 'Teklist',
	},
	{
		_id: '614c8f08fe60d017770f5ec7',
		name: 'Linkbuzz',
	},
	{
		_id: '614c8f08fe60d017770f5ec8',
		name: 'Eabox',
	},
	{
		_id: '614c8f08fe60d017770f5ec9',
		name: 'Skyba',
	},
	{
		_id: '614c8f08fe60d017770f5eca',
		name: 'Livepath',
	},
	{
		_id: '614c8f08fe60d017770f5ecb',
		name: 'Kwimbee',
	},
	{
		_id: '614c8f08fe60d017770f5ecc',
		name: 'Voonder',
	},
	{
		_id: '614c8f08fe60d017770f5ecd',
		name: 'Flipbug',
	},
	{
		_id: '614c8f08fe60d017770f5ece',
		name: 'Vimbo',
	},
	{
		_id: '614c8f08fe60d017770f5ecf',
		name: 'Ainyx',
	},
	{
		_id: '614c8f08fe60d017770f5ed0',
		name: 'Omba',
	},
	{
		_id: '614c8f08fe60d017770f5ed1',
		name: 'Aimbo',
	},
	{
		_id: '614c8f08fe60d017770f5ed2',
		name: 'Oozz',
	},
	{
		_id: '614c8f08fe60d017770f5ed3',
		name: 'Pixoboo',
	},
	{
		_id: '614c8f08fe60d017770f5ed4',
		name: 'Livefish',
	},
	{
		_id: '614c8f08fe60d017770f5ed5',
		name: 'Twimm',
	},
	{
		_id: '614c8f08fe60d017770f5ed6',
		name: 'Tazz',
	},
	{
		_id: '614c8f08fe60d017770f5ed7',
		name: 'Zoozzy',
	},
	{
		_id: '614c8f08fe60d017770f5ed8',
		name: 'Skinix',
	},
	{
		_id: '614c8f08fe60d017770f5ed9',
		name: 'Avamm',
	},
	{
		_id: '614c8f08fe60d017770f5eda',
		name: 'Blogtags',
	},
];

interface NoticeDetails {
	title: 'Random Title';
	body: string;
	attachedImages: string[];
	attachedFiles: string[];
	isEvent: boolean;
}

const EditPostLayout: React.FC<any> = ({ children }) => {
	const { loading: userLoading, data: userData } = useLoggedInUserQuery();

	const { isOpen, onClose, onOpen } = useDisclosure();
	const [selectedTags, setSelectedTags] = React.useState<any[]>([
		{
			_id: '614c8f08fe60d017770f5ebd',
			name: 'Quire',
		},
		{
			_id: '614c8f08fe60d017770f5ebe',
			name: 'Brainbox',
		},
	]);

	const {
		linkedEvents,
		addEvent,
		deleteEvent,
		updateDate,
		updateDescription,
		updateTitle,
		updateVenue,
	} = useLinkedEvents();

	const [noticeDetails, setNoticeDetails] = React.useState<NoticeDetails>({
		title: 'Random Title',
		body: '',
		attachedImages: [] as string[],
		attachedFiles: [] as string[],
		isEvent: false,
	});

	const setNoticeBody = (val: string) => {
		setNoticeDetails({
			...noticeDetails,
			body: val,
		});
	};

	const [createNotice] = useCreateNoticeMutation();

	const onListItemClick = (topic: TopicType) => {
		if (selectedTags.find((el) => el._id === topic._id)) {
			const updatedTags = selectedTags.filter((el) => el._id !== topic._id);
			console.log(updatedTags);
			setSelectedTags(updatedTags);
		} else {
			setSelectedTags([...selectedTags, topic]);
		}
	};

	const onPost = async () => {
		const noticeData = {
			title: noticeDetails.title,
			body: noticeDetails.body,
			time: new Date().toISOString(),
			topics: selectedTags.map((topic) => topic._id),
			attachedImages: noticeDetails.attachedImages,
			attachedFiles: noticeDetails.attachedFiles,
			isEvent: linkedEvents.length > 0 ? true : false,
		};

		const data = await createNotice({
			variables: {
				notice: noticeData,
				events: linkedEvents.map((e) => {
					return {
						name: e.title,
						date: e.date,
						venue: e.venue,
						meetLink: e.description,
					};
				}),
			},
		});

		if (data.errors) {
			alert('Something went wrong. Please try again.');
			return;
		}

		console.log('Posted!');
	};

	return userLoading ? (
		<Spinner></Spinner>
	) : (
		<>
			{/* @ts-ignore */}
			<TopicsModal
				tags={DUMMY_DATA}
				{...{ isOpen, onClose, onListItemClick, selectedTags }}
			/>
			<AppLayout>
				<div className="grid grid-cols-12">
					<div className="block w-full md:col-span-8">
						{/* Notice text area */}
						<BoundingBox>
							<h4 className="mt-1 font-semibold">Notice Content</h4>
							<TextArea
								charLimit={500}
								height={400}
								setText={setNoticeBody}
								value={noticeDetails.body}
							/>
						</BoundingBox>

						{/* Tags Area */}
						<BoundingBox>
							<h4 className="mt-1 font-semibold">Tag Your Notice</h4>
							<div className="flex items-center">
								<div className="my-3 w-full">
									{selectedTags.length ? (
										<div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
											{selectedTags.map((tag) => {
												return (
													<Tag
														key={tag._id}
														color={'purple'}
														onClick={() => {
															const a = 1 + 2;
														}}
													>
														{tag.name}
													</Tag>
												);
											})}
										</div>
									) : (
										<></>
									)}
								</div>
								<HiOutlinePlusCircle
									className="h-6 w-6 cursor-pointer text-green-400"
									onClick={onOpen}
								/>
							</div>
						</BoundingBox>

						{/* Events Area */}
						{new Array(linkedEvents.length).fill(0).map((_, index) => {
							return (
								<>
									<EventInput
										onDelete={() => deleteEvent(index)}
										currentEvent={linkedEvents[index]}
										updateDate={(value: string) => updateDate(index, value)}
										updateDescription={(value: string) =>
											updateDescription(index, value)
										}
										updateTitle={(value: string) => updateTitle(index, value)}
										updateVenue={(value: string) => updateVenue(index, value)}
									/>
								</>
							);
						})}

						{/* Add New Event */}
						<BoundingBox>
							<div className="flex items-center">
								<h4 className="w-full font-semibold">Add a linked event</h4>

								<HiOutlinePlusCircle
									className="h-6 w-6 cursor-pointer text-green-400"
									onClick={addEvent}
								/>
							</div>
						</BoundingBox>

						{/* Post Notice Button */}
						<div className="mx-6 mt-20">
							<Button onClick={onPost} size="small">
								Post Notice
							</Button>
						</div>
					</div>

					<div className="col-span-12 col-start-1 flex h-full w-full flex-col md:col-span-4 md:col-start-9 lg:block">
						{/* Preview Notice */}
						<BoundingBox>
							<h4 className="mt-1 font-semibold">Notice Preview</h4>
							<FeedPost
								notice={{
									title: noticeDetails.title,
									body: noticeDetails.body,
									linkedEvents: linkedEvents,
									isEvent: true,
									attachedImages: noticeDetails.attachedImages,
									likeCount: 0,
									postedBy: {
										_id: userData!.user!._id,
										name: userData!.user!.name,
										profilePicture: userData!.user!.profilePicture,
									},
									time: new Date().toISOString(),
									topics: selectedTags,
								}}
								showActions={false}
							></FeedPost>
						</BoundingBox>

						{/* Preview Events */}
						<div className="mx-6 my-6">
							{linkedEvents.length ? (
								<h4 className="mt-1 mb-4 font-semibold">Events Preview</h4>
							) : (
								<></>
							)}
							{new Array(linkedEvents.length).fill(0).map((_, index) => {
								return (
									<EventItem
										key={index}
										event={{
											name: linkedEvents[index].title,
											meetLink: linkedEvents[index].meetLink,
											date: linkedEvents[index].date,
											venue: linkedEvents[index].venue,
											description: linkedEvents[index].description,
										}}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</AppLayout>
		</>
	);
};

const NewPost: React.FC = () => {
	return (
		<>
			<EditPostLayout />
		</>
	);
};

// @ts-ignore
export default withApollo()(NewPost);
