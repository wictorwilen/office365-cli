# spo propertybag list

Gets property bag values

## Usage

```sh
spo propertybag list [options]
```

## Options

Option|Description
------|-----------
`--help`|output usage information
`-u, --webUrl <webUrl>`|The URL of the site from which the property bag value should be retrieved
`-f, --folder [folder]`|Site-relative URL of the folder from which to retrieve property bag value. Case-sensitive
`-o, --output [output]`|Output type. `json|text`. Default `text`
`--verbose`|Runs command with verbose logging
`--debug`|Runs command with debug logging

!!! important
    Before using this command, connect to a SharePoint Online site, using the [spo connect](../connect.md) command.

## Remarks

To retrieve property bag values, you have to first connect to a SharePoint Online site using the [spo connect](../connect.md) command, eg. `spo connect https://contoso.sharepoint.com`.

## Examples

Return property bag values located in site _https://contoso.sharepoint.com/sites/test_

```sh
spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test
```

Return property bag values located in site root folder _https://contoso.sharepoint.com/sites/test_

```sh
spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test --folder /
```

Return property bag values located in site document library _https://contoso.sharepoint.com/sites/test_

```sh
spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test --folder '/Shared Documents'
```

Return property bag values located in folder in site document library _https://contoso.sharepoint.com/sites/test_

```sh
spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test --folder '/Shared Documents/MyFolder'
```

Return property bag values located in site list _https://contoso.sharepoint.com/sites/test_

```sh
spo propertybag list --webUrl https://contoso.sharepoint.com/sites/test --folder /Lists/MyList
```