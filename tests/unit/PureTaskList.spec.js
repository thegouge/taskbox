import Vue from 'vue';
import { WithPinnedTasks } from '../../src/components/PureTaskList.stories';
import PureTaskList from '../../src/components/PureTaskList.vue';

it('renders pinned tasks at the start of the list', () => {
	const Constructor = Vue.extend(PureTaskList);
	const vm = new Constructor({
		//👇 Story's args used with our test
		propsData: WithPinnedTasks.args,
	}).$mount();
	const firstTaskPinned = vm.$el.querySelector(
		'.list-item:nth-child(1).TASK_PINNED'
	);

	// We expect the pinned task to be rendered first, not at the end
	expect(firstTaskPinned).not.toBe(null);
});
