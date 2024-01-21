import Project from './Project';

export default function Card() {
  //   const projects = [
  //     {
  //       name: 'GitFitNotFat',
  //       github: 'https://github.com/SeeYouThursday/GitFitNotFat',
  //       url: 'https://seeyouthursday.github.io/GitFitNotFat/',
  //       description:
  //         'Pick a recipe then give calories, then user inputs the activity they want to do to burn off those calories. The app then returns the duration of that activity needed to burn off the calories from the food selected in addition to the calories burned for that activity. We learned how to avoid conflicts with merges while working with other collaborators in an agile work enviroment. Also, some APIs do not update their documents, and trial and error takes over.', //!Edit Later
  //     },
  //   ]; //! Moved to json file
  <div className="row">
    <div className="card col-6 m-3 p-0">
      <img
        src="./assets/images/GitFitNotFat-ScreenshotCrop.png"
        className="card-img-top m-0 img-fluid"
        alt="GitFitNotFat app screenshot"
      />
      <div className="card-body">
        <h5 className="card-title">GitFitNotFat</h5>
        <p className="card-text">
          Utilizing server-side APIs in an Agile dev environment, I led my team
          to providing an answer to the problem of eating unhealthy, but not
          exercising.
        </p>
        <div className="flex-space-btwn">
          <a
            href="https://seeyouthursday.github.io/GitFitNotFat/"
            className="btn btn-primary"
          >
            Application Link
          </a>
          <a
            href="https://github.com/SeeYouThursday/GitFitNotFat"
            className="btn btn-primary"
          >
            Repository Link
          </a>
        </div>
      </div>
    </div>
  </div>;
}
