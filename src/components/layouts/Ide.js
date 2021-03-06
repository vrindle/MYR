import React from 'react';
import Editor from '../Editor';
import Footer from '../Footer';
import Header from '../Header';
import View from '../View';

export const Ide = ({ editor, editorActions, user, authActions, scene, sceneActions, projectActions, courseActions, projects, courses, match, classroomActions, classrooms }) => (
    <div className="App">
        <Header
            logging={authActions}
            sceneActions={sceneActions}
            actions={editorActions}
            user={user}
            scene={scene}
            text={editor.text}
            message={editor.message}
            projectId={match.params.id}
            match={match}
            projectActions={projectActions}
            courseActions={courseActions}
            projects={projects}
            courses={courses}
            classroomActions={classroomActions}
            classrooms={classrooms}
        />
        <div className="row no-gutters">
            {
                scene.viewOnly
                    ?
                    <div id="scene" className="col-12" >
                        <View objects={editor.objects} sceneConfig={scene} assets={editor.assets} />
                    </div>
                    :
                    <>
                        <div id="interface" className="col-12 col-md-4" >
                            <Editor text={editor.text} user={user} />
                        </div>
                        <div id="scene" className="col-12 col-md-8" >
                            <View objects={editor.objects} sceneConfig={scene} assets={editor.assets} />
                        </div>
                    </>
            }
        </div>
        <Footer />
    </div>
);

export default Ide;