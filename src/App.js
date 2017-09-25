import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './presentational/TopBar.js';
import ExpandingCard from './presentational/ExpandingCard.js'
import Procedures from './container/Procedures.js'
import AddProcedureButton from './container/AddProcedureButton.js'
import { FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

const projects = [
  {
    projectName: '',
    projectId:1,
    where: '',
    startDate: '',
    endDate: '',
    activeProcedures:[],
  }
]

const library = [
  {
    procedureName:'Build Foundations',
    isVisible:false,
    expanded:false,
    completedTasks:0,
    id:1,
  }, 
  {
    procedureName:'Building the roof',
    isVisible:false,
    expanded:false,
    completedTasks:0,
    id:2,
  } 
]

 const tasks = [  
  {
    taskName:'dig at least 1m deep', isCompleted:false, procedureId:1
  },
  {
    taskName:'At least 50m wide digging', isCompleted:false, procedureId:1
  },
  {
    taskName:'Buy megazords', isCompleted:false, procedureId:1
  },
  {
    taskName:'Constructed according to the project', isCompleted:false, procedureId:2
  },
  {
    taskName:'Protect wood from humidity', isCompleted:false, procedureId:2
  },
  {
    taskName:'Roof build with the correct angle', isCompleted:false, procedureId:2
  }
]

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects,
      library,
      tasks,
    }
  }

  onTaskToggle = (task, procedure) => {
    if(task.isCompleted === false){
    procedure.completedTasks += 1;
    this.setState({
      procedure
      }) 
    }

    if(task.isCompleted === true){
      procedure.completedTasks -= 1;
      this.setState({
        procedure
      })
    }

    task.isCompleted = !task.isCompleted;
    this.setState({
      task
    })
  }

  onProcedureToggle = (procedure) => {
    procedure.expanded = !procedure.expanded;
    this.setState({
      procedure
    })
  }

  handleNameInput = (e, project) => {
    e.preventDefault();
    const projectName = e.target.projectName.value;
    project.projectName = projectName;
    this.setState({
      project
    })
  }

  handleWhereInput = (e, project) => {
    e.preventDefault();
    const where = e.target.where.value;
    project.where = where;
    this.setState({
      where
    })
  }


  render() {
    const {projects, library, expanded, tasks} = this.state;
    return (
      <MuiThemeProvider>
        <div>
          {
            this.state.projects.map(singleproject =>{
              return (
                <div key={singleproject.projectId}>
                  <TopBar/>
                  <ExpandingCard
                    library={library}
                    tasks={tasks}
                    onTaskToggle={this.onTaskToggle}
                    onProcedureToggle={this.onProcedureToggle}
                    project={singleproject}
                    handleNameInput={this.handleNameInput}
                    handleWhereInput={this.handleWhereInput}
                  />
                </div>
              )
            })}
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;