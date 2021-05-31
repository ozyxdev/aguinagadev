import styled from 'styled-components'
import Design from '../../public/design.svg'
import Code from '../../public/code.svg'
import Support from '../../public/support.svg'
import Strategy from '../../public/strategy.svg'

const TaskItemStyle = styled.div`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 0.3rem;
  background: var(--secondary-100);

  margin: 0 0.5rem 0 0;

  span {
    color: var(--secondary-dark);
    display: flex;
    justify-items: center;
    align-items: center;
    font-size: 0.8rem;
  }

  svg {
    margin-right: 0.1rem;
    height: 1rem;
    width: auto;

    path {
      fill: var(--secondary-dark);
      width: 100%;
      height: 100%;
    }
  }
`

export default function TaskItem({ taskItem }) {
  return (
    <TaskItemStyle className="task-item">
      <span>
        {taskItem.icon === 'code' && <Code />}
        {taskItem.icon === 'support' && <Support />}
        {taskItem.icon === 'design' && <Design />}
        {taskItem.icon === 'strategy' && <Strategy />}

        {taskItem.text}
      </span>
    </TaskItemStyle>
  )
}
