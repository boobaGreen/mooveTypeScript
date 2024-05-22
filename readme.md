<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="100" />
</p>
<p align="center">
    <h1 align="center">MOOVE-TYPESCRIPT</h1>
</p>

<p align="center">
	<img src="https://img.shields.io/github/last-commit/boobaGreen/mooveTypeScript?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/boobaGreen/mooveTypeScript?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/boobaGreen/mooveTypeScript?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## Quick Links

> - [Overview](#overview)
> - [Features](#features)
> - [Repository Structure](#repository-structure)
> - [Modules](#modules)
> - [Getting Started](#getting-started)
>   - [Installation](#installation)
>   - [Running mooveTypeScript](#running-moovetypescript)
> - [Codepen](#codepen)
> - [Contributing](#contributing)
> - [License](#license)
> - [Acknowledgments](#acknowledgments)

---

## Overview

MooveTypeScript is an urban transportation management application implemented in TypeScript. The project allows users to book transportation means such as bikes, scooters, and electric scooters, and managers to add vehicles to the available fleet in a city.

---

## Features

- **Vehicle Management**: Add and manage different types of vehicles (bikes, scooters, electric scooters) in various cities.
- **Vehicle Booking**: Users can book available vehicles and receive notifications about their availability.
- **Payment Methods Integration**: Supports various payment methods such as credit card, PayPal, ApplePay, and GooglePay.

[View on Eraser![](https://app.eraser.io/workspace/HFPC2ALDLKvtidwPkelJ/preview?elements=c594sstGMHKtHw39gqd2MA&type=embed)](https://app.eraser.io/workspace/HFPC2ALDLKvtidwPkelJ?elements=c594sstGMHKtHw39gqd2MA)

---

## Repository Structure

```sh
└── mooveTypeScript/
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── class.ts
    │   ├── index.ts
    │   └── types.ts
    └── tsconfig.json

```

## Modules

<details closed><summary>Files</summary>

| File                                                                                             | Summary                            |
| ------------------------------------------------------------------------------------------------ | ---------------------------------- |
| [tsconfig.json](https://github.com/boobaGreen/mooveTypeScript/blob/master/tsconfig.json)         | TypeScript configuration.          |
| [note.txt](https://github.com/boobaGreen/mooveTypeScript/blob/master/note.txt)                   | Development notes for the project. |
| [package.json](https://github.com/boobaGreen/mooveTypeScript/blob/master/package.json)           | Project dependencies and scripts.  |
| [package-lock.json](https://github.com/boobaGreen/mooveTypeScript/blob/master/package-lock.json) | Lockfile for dependencies.         |

</details>

<details closed><summary>src</summary>

| File                                                                               | Summary                             |
| ---------------------------------------------------------------------------------- | ----------------------------------- |
| [types.ts](https://github.com/boobaGreen/mooveTypeScript/blob/master/src/types.ts) | Definition of types and interfaces. |
| [class.ts](https://github.com/boobaGreen/mooveTypeScript/blob/master/src/class.ts) | Implementation of main classes.     |
| [index.ts](https://github.com/boobaGreen/mooveTypeScript/blob/master/src/index.ts) | Example usage of the classes.       |

</details>

---

```

```

## Getting Started

### Requirements

Ensure you have the following tools installed on your system:

- **Node.js**
- **TypeScript**

### Installation

1. Clone the mooveTypeScript repository:

```sh
git clone https://github.com/boobaGreen/mooveTypeScript
```

2. Change to the project directory:

```sh
cd mooveTypeScript
```

3. Install the dependencies:

```sh
npm install
```

4. Compile the TypeScript code:

```sh
npx tsc
```

### Running mooveTypeScript

Use the following command to run mooveTypeScript:

```sh
node build/index.js
```

---

## CodePen

We've created a simple example on CodePen to demonstrate a basic implementation of some functionalities of the MooveTypeScript project. Feel free to check it out and play around:

PS select Typescript in the setup "wheel" and open the browser console with "F12" to see result

## [MooveTypeScript CodePen](https://codepen.io/boobagreen/pen/JjqXzJb)

---s

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/boobaGreen/mooveTypeScript/pulls)**: Review open PRs, and submit your own.
- **[Join the Discussions](https://github.com/boobaGreen/mooveTypeScript/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/boobaGreen/mooveTypeScript/issues)**: Submit bugs found or log feature requests for MooveTypeScript.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/your-username/mooveTypeScript
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## License

This project is protected under the [ISC](LICENSE) License.

---

## Acknowledgments

- Acknowledge any resources, contributors, inspiration, etc.

[**Return**](#quick-links)
