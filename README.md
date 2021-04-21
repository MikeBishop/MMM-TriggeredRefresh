# MMM-TriggeredRefresh

This MagicMirror² module monitors system notifications and refreshes the view if
any matching notifications are received.

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/MikeBishop/MMM-TriggeredRefresh
````

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-TriggeredRefresh',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:

<table width="100%">
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>triggers</code></td>
			<td>A map of events and optional filters. A function can
				include a function which can return a boolean or a
				Promise that resolve to a Boolean.  If no function
				is provided, the event always triggers a refresh.
				<br>
				**Example:**
				`"USER_PRESENCE": (payload, sender, state) => payload`
			</td>
	</tbody>
</table>
