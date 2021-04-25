import React from 'react';

const iconNames = {
  Yes: '/static/check-circle.svg',
  'In Moderation': '/static/alert-circle-yellow.svg',
  Harmful: '/static/alert-circle-red.svg',
  Toxic: '/static/x-circle.svg'
};

const Results = ({ results }) => {
  if (results === '') return null;

  return (
    <div className="results text-lg w-full max-w-xl">
      {!results ? (
        <div className="p-4 text-center">We couldn't find anything for your search term.</div>
      ) : (
        <div
          className={`rounded-lg border-8 p-4 shadow-md my-4 ${
            results.canEat === 'No' ? 'border-red-500 bg-red-50' : 'border-green-500 bg-green-50'
          }`}
        >
          <img
            className="mx-auto py-2"
            alt=""
            src={process.env.PUBLIC_URL + iconNames[results.level]}
          />
          <h2 className="text-2xl text-center py-2">
            {results.canEat} {results.level !== results.canEat ? `(${results.level})` : null}
          </h2>
          <p className="py-2">{results.description}</p>
          {results.tips && (
            <p className="py-2">
              <strong>Tips:</strong> {results.tips}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Results;
